import type { Metadata } from "next";
import ChatInterface from "./ChatInterface";

export const metadata: Metadata = {
  title: "Chat – Arom AI",
  description: "Chat with Arom AI – your intelligent assistant.",
};

export default function ChatPage() {
  return <ChatInterface />;
}
