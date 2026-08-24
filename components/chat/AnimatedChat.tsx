"use client";

import React from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInputBar } from "./ChatInputBar";
import { useConversationAnimation } from "./useConversationAnimation";
import { conversationScript, CONTACT } from "./conversationData";
import styles from "./AnimatedChat.module.css";

export interface AnimatedChatProps {
  /** Override the demo script — defaults to conversationData.ts. */
  script?: typeof conversationScript;
  /** Override the header contact — defaults to conversationData.ts. */
  contact?: typeof CONTACT;
  className?: string;
}

/**
 * A looping, realistic chat conversation demo matching KinChat's visual
 * design. Drop it into a landing page hero with no props for the default
 * demo, or pass `script`/`contact` to reuse the engine elsewhere.
 */
export function AnimatedChat({
  script = conversationScript,
  contact = CONTACT,
  className,
}: AnimatedChatProps) {
  const { messages, typingSender, resetting } = useConversationAnimation(script);

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      <ChatHeader name={contact.name} status={contact.status} avatarUrl={contact.avatarUrl} />

      <div className={[styles.fadeWrap, resetting ? styles.resetting : ""].join(" ")}>
        <ChatMessageList messages={messages} typingSender={typingSender} contactName={contact.name} />
      </div>

      <ChatInputBar />
    </div>
  );
}

export default AnimatedChat;
