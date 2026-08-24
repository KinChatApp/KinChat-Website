import { ConversationMessage } from "./types";

/**
 * Demo conversation script.
 *
 * This is the piece you replace to reuse the engine for a different demo —
 * nothing below this file needs to change. Each entry is one "beat":
 * typing indicator -> message reveal -> (optional) status progression ->
 * pause -> next beat.
 */
export const conversationScript: ConversationMessage[] = [
  {
    id: "m1",
    sender: "them",
    text: "Hey! Are you free this evening?",
    typingDurationMs: 1700,
    postDelayMs: 1100,
    dayDivider: "TODAY",
  },
  {
    id: "m2",
    sender: "me",
    text: "Yeah, probably around 8 PM.",
    typingDurationMs: 1300,
    postDelayMs: 450,
    statusProgression: [
      { status: "sent", delayMs: 500 },
      { status: "delivered", delayMs: 650 },
      { status: "seen", delayMs: 900 },
    ],
  },
  {
    id: "m3",
    sender: "them",
    text: "Perfect. Let's meet at the usual place.",
    typingDurationMs: 1900,
    postDelayMs: 500,
    replyTo: { sender: "me", text: "Yeah, probably around 8 PM." },
    newMessagesDivider: "3 New Messages",
  },
  {
    id: "m4",
    sender: "them",
    text: "I'll bring the documents we discussed.",
    typingDurationMs: 1500,
    postDelayMs: 1300,
    groupWithPrevious: true,
  },
  {
    id: "m5",
    sender: "me",
    text: "Sounds good, see you at 8!",
    typingDurationMs: 1200,
    postDelayMs: 450,
    statusProgression: [
      { status: "sent", delayMs: 450 },
      { status: "delivered", delayMs: 600 },
      { status: "seen", delayMs: 1050 },
    ],
  },
  {
    id: "m6",
    sender: "them",
    text: "Perfect \u{1F44D}",
    typingDurationMs: 1100,
    postDelayMs: 2600,
  },
];

export const CONTACT = {
  name: "Alex Morgan",
  status: "Online",
  avatarUrl: "https://i.pravatar.cc/120?img=13",
};
