// Shared types for the AnimatedChat component family.
// Keeping these separate from the animation engine and the UI components
// is what lets the demo conversation be swapped out later without touching
// any rendering or timing logic.

export type Sender = "me" | "them";

export type MessageStatus = "sending" | "sent" | "delivered" | "seen";

export interface ReplyQuote {
  sender: Sender;
  text: string;
}

/**
 * A single scripted message in the demo conversation.
 *
 * Timing fields are intentionally explicit per-message rather than global
 * constants, since real conversations don't have uniform rhythm — short
 * acknowledgements land fast, longer replies take longer to "type".
 */
export interface ConversationMessage {
  /** Stable unique id, also used as the React key. */
  id: string;
  sender: Sender;
  text: string;
  /** How long the typing indicator is shown before this message appears. */
  typingDurationMs: number;
  /** How long to hold after this message (and its status, if any) resolves,
   * before the next event in the script begins. */
  postDelayMs: number;
  /** Only relevant for sender: "me". Each entry fires `delayMs` after the
   * previous one (or after the message appears, for the first entry). */
  statusProgression?: { status: MessageStatus; delayMs: number }[];
  /** Renders a quoted "reply to" snippet above the message text. */
  replyTo?: ReplyQuote;
  /** Visually groups this bubble with the previous one from the same
   * sender (no extra top gap, single timestamp for the group). */
  groupWithPrevious?: boolean;
  /** Renders a centered day divider ("TODAY") above this message. */
  dayDivider?: string;
  /** Renders a centered "N New Messages" style divider above this message. */
  newMessagesDivider?: string;
}

/** Runtime representation of a message once it has entered the timeline. */
export interface RenderedMessage extends ConversationMessage {
  status?: MessageStatus;
  timestamp: string;
}
