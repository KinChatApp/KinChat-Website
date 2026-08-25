import { useEffect, useRef, useState } from "react";
import type { ConversationMessage, RenderedMessage, Sender } from "./types";

const HOLD_AFTER_CONVERSATION_MS = 2600;
const FADE_DURATION_MS = 500;
const GAP_BEFORE_RESTART_MS = 350;

function formatTimestamp(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const suffix = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${suffix}`;
}

interface AnimationState {
  messages: RenderedMessage[];
  typingSender: Sender | null;
  resetting: boolean;
}

/**
 * Drives the whole conversation timeline: typing -> reveal -> status
 * progression -> pause -> next message -> ... -> fade out -> loop.
 */
export function useConversationAnimation(script: ConversationMessage[]) {
  const [state, setState] = useState<AnimationState>({
    messages: [],
    typingSender: null,
    resetting: false,
  });

  const cancelledRef = useRef(false);
  const timeoutIdsRef = useRef<number[]>([]);

  useEffect(() => {
    cancelledRef.current = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(() => {
          timeoutIdsRef.current = timeoutIdsRef.current.filter((t) => t !== id);
          resolve();
        }, ms);
        timeoutIdsRef.current.push(id);
      });

    async function runLoop() {
      while (!cancelledRef.current) {
        for (const msg of script) {
          if (cancelledRef.current) return;

          // 1. Typing indicator: Only show the bubble if the sender is "them".
          // For "me", we just wait (simulate typing time) but don't show the UI bubble.
          setState((s) => ({ ...s, typingSender: msg.sender === "them" ? "them" : null }));
          await sleep(msg.typingDurationMs);
          if (cancelledRef.current) return;

          // 2. Reveal the message (typing indicator swapped for the bubble).
          const rendered: RenderedMessage = {
            ...msg,
            status: msg.sender === "me" ? "sending" : undefined,
            timestamp: formatTimestamp(new Date()),
          };
          setState((s) => ({
            ...s,
            typingSender: null,
            messages: [...s.messages, rendered],
          }));

          // 3. Status progression (sent -> delivered -> seen) for outgoing.
          if (msg.sender === "me" && msg.statusProgression) {
            for (const step of msg.statusProgression) {
              await sleep(step.delayMs);
              if (cancelledRef.current) return;
              setState((s) => ({
                ...s,
                messages: s.messages.map((m) =>
                  m.id === msg.id ? { ...m, status: step.status } : m
                ),
              }));
            }
          }

          // 4. Natural pause before the next beat.
          await sleep(msg.postDelayMs);
        }

        if (cancelledRef.current) return;

        // Hold the finished conversation on screen briefly, then fade out
        // and reset for a seamless loop (no flash, no layout jump).
        await sleep(HOLD_AFTER_CONVERSATION_MS);
        if (cancelledRef.current) return;

        setState((s) => ({ ...s, resetting: true, typingSender: null }));
        await sleep(FADE_DURATION_MS);
        if (cancelledRef.current) return;

        setState({ messages: [], typingSender: null, resetting: true });
        await sleep(GAP_BEFORE_RESTART_MS);
        if (cancelledRef.current) return;

        setState((s) => ({ ...s, resetting: false }));
      }
    }

    runLoop();

    return () => {
      cancelledRef.current = true;
      timeoutIdsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, [script]);

  return state;
}
