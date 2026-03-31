"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const DEMO_RESPONSES: Record<string, string> = {
  default:
    "I'm Arom AI, your intelligent assistant! I can help you with writing, coding, research, analysis, and much more. What would you like to work on today?",
  hello:
    "Hello! Great to meet you. I'm Arom AI — here to help you think, create, and get more done. What can I assist you with?",
  help: "I can help you with a wide range of tasks:\n\n• **Writing** – Emails, blog posts, essays, marketing copy\n• **Coding** – Write, debug, and explain code in any language\n• **Research** – Summarize documents, answer questions, analyze data\n• **Brainstorming** – Generate ideas and creative solutions\n• **Translation** – Work in 50+ languages\n\nJust ask me anything!",
  code: "Sure! I'd be happy to help with coding. Here's a quick example in Python:\n\n```python\ndef greet(name: str) -> str:\n    return f\"Hello, {name}! Welcome to Arom AI.\"\n\nprint(greet(\"World\"))\n```\n\nWhat language or problem are you working with?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return DEMO_RESPONSES.hello;
  }
  if (lower.includes("help") || lower.includes("what can you do")) {
    return DEMO_RESPONSES.help;
  }
  if (lower.includes("code") || lower.includes("program") || lower.includes("python") || lower.includes("javascript")) {
    return DEMO_RESPONSES.code;
  }
  return `Thanks for your message! In the live version, I'd provide a thoughtful, detailed response to: "${input}"\n\nThis is a demo — connect to the Arom AI backend to enable full AI responses.`;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: DEMO_RESPONSES.default,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 500));

    const aiMsg: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: getResponse(text),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white font-bold text-sm">
            A
          </span>
          <span className="text-lg font-bold text-gray-900">
            Arom<span className="text-violet-600">.ai</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Demo Mode
          </span>
          <Link
            href="/"
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            ← Back
          </Link>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-3xl flex flex-col gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {/* Avatar */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  msg.role === "user"
                    ? "bg-gray-200 text-gray-600"
                    : "bg-violet-600 text-white"
                }`}
              >
                {msg.role === "user" ? "U" : "A"}
              </div>

              {/* Bubble */}
              <div
                className={`max-w-lg rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "rounded-tr-none bg-violet-600 text-white"
                    : "rounded-tl-none bg-white border border-gray-200 text-gray-800 shadow-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
                A
              </div>
              <div className="rounded-2xl rounded-tl-none border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                  <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                  <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-end gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-3 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 transition-all">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message Arom AI... (Press Enter to send, Shift+Enter for new line)"
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
              style={{ maxHeight: "200px" }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isTyping}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40 transition-colors"
              aria-label="Send message"
            >
              <svg className="h-4 w-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-gray-400">
            Arom AI may make mistakes. This is a demo — connect backend for full AI responses.
          </p>
        </div>
      </div>
    </div>
  );
}
