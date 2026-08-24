import React from "react";
import type { RenderedMessage } from "./types";
import { MessageStatus } from "./MessageStatus";
import styles from "./AnimatedChat.module.css";

interface AnimatedMessageProps {
  message: RenderedMessage;
  /** Show the timestamp/status meta row (suppressed for the first bubble
   * in a grouped pair, shown on the last one, matching the screenshot). */
  showMeta: boolean;
}

export function AnimatedMessage({ message, showMeta }: AnimatedMessageProps) {
  const isMe = message.sender === "me";
  const rowClasses = [
    styles.row,
    isMe ? styles.rowMe : styles.rowThem,
    message.groupWithPrevious ? styles.grouped : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {message.dayDivider && (
        <div className={styles.divider}>
          <span className={styles.dividerPill}>{message.dayDivider}</span>
        </div>
      )}
      {message.newMessagesDivider && (
        <div className={styles.divider}>
          <span className={styles.dividerPill}>
            <span className={styles.dividerDot} />
            {message.newMessagesDivider}
          </span>
        </div>
      )}

      <div className={rowClasses}>
        <div className={[styles.bubbleCol, isMe ? styles.bubbleColMe : styles.bubbleColThem].join(" ")}>
          <div
            className={[
              styles.bubble,
              isMe ? styles.bubbleMe : styles.bubbleThem,
              styles.enter,
            ].join(" ")}
          >
            {message.replyTo && (
              <div className={styles.replyQuote}>
                <span className={styles.replyQuoteLabel}>
                  {message.replyTo.sender === "me" ? "You" : message.replyTo.sender}
                </span>
                <span className={styles.replyQuoteText}>{message.replyTo.text}</span>
              </div>
            )}
            {message.text}
          </div>

          {showMeta && (
            <div className={styles.metaRow}>
              <span className={styles.timestamp}>{message.timestamp}</span>
              {isMe && message.status && <MessageStatus status={message.status} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
