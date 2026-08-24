import React from "react";
import styles from "./AnimatedChat.module.css";

/** Decorative input bar — this is a marketing/demo surface, not a real
 * text field, so it stays inert by design. */
export function ChatInputBar() {
  return (
    <div className={styles.inputBar}>
      <svg className={styles.iconButton} width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>

      <div className={styles.inputPill}>
        <span className={styles.inputPlaceholder}>Message...</span>
        <svg className={styles.iconButton} width="19" height="19" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.5 14s1.3 2 3.5 2 3.5-2 3.5-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9" cy="9.5" r="1" fill="currentColor" />
          <circle cx="15" cy="9.5" r="1" fill="currentColor" />
        </svg>
      </div>

      <div className={styles.micButton}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
          <path
            d="M5 11a7 7 0 0 0 14 0M12 18v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
