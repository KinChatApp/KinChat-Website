import React from "react";
import type { Sender } from "./types";
import styles from "./AnimatedChat.module.css";

interface TypingIndicatorProps {
  sender: Sender;
  /** When sender is "them", show the "<name> is typing..." caption below. */
  contactName?: string;
}

export function TypingIndicator({ sender, contactName }: TypingIndicatorProps) {
  const bubble = (
    <div
      className={[styles.typingBubble, sender === "me" ? styles.typingBubbleMe : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.typingDot} />
      <span className={styles.typingDot} />
      <span className={styles.typingDot} />
    </div>
  );

  if (sender === "me") {
    return (
      <div className={[styles.row, styles.rowMe, styles.enter].join(" ")}>
        <div className={[styles.bubbleCol, styles.bubbleColMe].join(" ")}>{bubble}</div>
      </div>
    );
  }

  return (
    <div className={[styles.row, styles.rowThem, styles.enter, styles.typingCaptionRow].join(" ")}>
      {bubble}
      {contactName && (
        <span className={styles.typingCaption}>{contactName} is typing...</span>
      )}
    </div>
  );
}
