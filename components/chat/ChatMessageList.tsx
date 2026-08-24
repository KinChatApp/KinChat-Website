import React, { useEffect, useRef } from "react";
import type { RenderedMessage, Sender } from "./types";
import { AnimatedMessage } from "./AnimatedMessage";
import { TypingIndicator } from "./TypingIndicator";
import styles from "./AnimatedChat.module.css";

interface ChatMessageListProps {
  messages: RenderedMessage[];
  typingSender: Sender | null;
  contactName: string;
}

export function ChatMessageList({ messages, typingSender, contactName }: ChatMessageListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the newest content whenever the timeline grows, but only
  // when the list actually overflows its container — short conversations
  // stay put instead of jittering.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (el.scrollHeight > el.clientHeight) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages.length, typingSender]);

  return (
    <div className={styles.list} ref={listRef}>
      {messages.map((message, i) => {
        const next = messages[i + 1];
        // Show the meta row (timestamp/status) on the last bubble of a
        // grouped run from the same sender, matching the screenshot where
        // consecutive bubbles share a single trailing timestamp.
        const isLastOfGroup = !next || next.sender !== message.sender || !next.groupWithPrevious;
        return (
          <AnimatedMessage key={message.id} message={message} showMeta={isLastOfGroup} />
        );
      })}

      {typingSender && (
        <TypingIndicator
          sender={typingSender}
          contactName={typingSender === "them" ? contactName : undefined}
        />
      )}
    </div>
  );
}
