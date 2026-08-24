import React from "react";
import type { MessageStatus as Status } from "./types";
import styles from "./AnimatedChat.module.css";

interface MessageStatusProps {
  status: Status;
}

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="14" height="10" viewBox="0 0 16 12" fill="none">
    <path
      d="M1 6.2L5.3 10.5L15 1"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DoubleCheckIcon = ({ color }: { color: string }) => (
  <svg width="18" height="10" viewBox="0 0 20 12" fill="none">
    <path
      d="M1 6.2L5.3 10.5L15 1"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.2L10.3 10.5L20 1"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Renders the sent / delivered / seen indicator for outgoing messages.
 * "sending" renders nothing visible yet (avoids a flash before "sent").
 */
export function MessageStatus({ status }: MessageStatusProps) {
  if (status === "sending") return null;

  return (
    <span className={styles.statusIcon} aria-label={status}>
      {status === "sent" && <CheckIcon color="#8b92a8" />}
      {status === "delivered" && <DoubleCheckIcon color="#8b92a8" />}
      {status === "seen" && <DoubleCheckIcon color="#7b80ff" />}
    </span>
  );
}
