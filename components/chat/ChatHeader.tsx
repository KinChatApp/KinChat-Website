import React from "react";
import styles from "./AnimatedChat.module.css";

interface ChatHeaderProps {
  name: string;
  status: string;
  avatarUrl: string;
}

export function ChatHeader({ name, status, avatarUrl }: ChatHeaderProps) {
  return (
    <div className={styles.header}>
      <svg
        className={styles.headerIcon}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className={styles.avatarWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.avatar} src={avatarUrl} alt={name} />
        <span className={styles.onlineDot} />
      </div>

      <div className={styles.headerInfo}>
        <span className={styles.headerName}>{name}</span>
        <span className={styles.headerStatus}>{status}</span>
      </div>

      <div className={styles.headerActions}>
        <svg className={styles.headerIcon} width="19" height="19" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.36 1.78.7 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.27a2 2 0 0 1 2.11-.45c.82.34 1.7.58 2.6.7A2 2 0 0 1 22 16.92z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg className={styles.headerIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M23 7l-7 5 7 5V7z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="1" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        <svg className={styles.headerIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="12" cy="19" r="1.8" />
        </svg>
      </div>
    </div>
  );
}
