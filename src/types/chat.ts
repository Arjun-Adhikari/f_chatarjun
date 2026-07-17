export interface Chat {
  id: string;
  name: string;
  platform: "All" | "Messenger" | "Instagram" | "WhatsApp";
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar?: string;
}

export const mockChats: Chat[] = [
  {
    id: "1",
    name: "Alice Gurung",
    platform: "Messenger",
    lastMessage: "Sure, I'll send the documents by EOD.",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    unread: 2,
  },
  {
    id: "2",
    name: "Bob Thapa",
    platform: "WhatsApp",
    lastMessage: "Meeting at 3 PM tomorrow?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    unread: 0,
  },
  {
    id: "3",
    name: "Carol Sharma",
    platform: "Instagram",
    lastMessage: "Loved the photo! 📸",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unread: 1,
  },
  {
    id: "4",
    name: "Dave Rai",
    platform: "Messenger",
    lastMessage: "Can you review the PR when you get a chance?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    unread: 0,
  },
  {
    id: "5",
    name: "Eva Tamang",
    platform: "WhatsApp",
    lastMessage: "Happy birthday! 🎂",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    unread: 3,
  },
  {
    id: "6",
    name: "Frank Limbu",
    platform: "Instagram",
    lastMessage: "Check out this reel!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    unread: 0,
  },
];
