"use client";

import { AnimatePresence, motion } from "motion/react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { cvData } from "@/src/data/cv-data";
import { cn } from "@/src/lib/utils";
import MarkdownContent from "./MarkdownContent";

type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "error";
  content: string;
};

const MAX_INPUT_LENGTH = 2000;

const SUGGESTIONS = [
  "What experience does Denver have?",
  "What are his technical skills?",
  "How can I contact him?",
];

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: createId(),
      role: "assistant",
      content:
        "Hi! I'm Denver's AI assistant. Ask me anything about his experience, skills, projects, or background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading]);

  useEffect(() => {
    if (open) return;

    const timer = setTimeout(() => setBadgeVisible(true), 4000);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    const visualViewport = window.visualViewport;
    if (!visualViewport) return;

    const handleKeyboardLayout = () => {
      const visibleBottom = visualViewport.offsetTop + visualViewport.height;
      let offset = 0;

      const input = inputRef.current;
      if (input) {
        const rect = input.getBoundingClientRect();
        const overlap = rect.bottom - visibleBottom;
        offset = overlap > 0 ? overlap + 12 : 0;
      } else if (window.innerHeight - visibleBottom > 100) {
        offset = window.innerHeight - visibleBottom;
      }

      setKeyboardOffset(offset);
      setViewportHeight(visualViewport.height);
    };

    visualViewport.addEventListener("resize", handleKeyboardLayout);
    visualViewport.addEventListener("scroll", handleKeyboardLayout);

    return () => {
      visualViewport.removeEventListener("resize", handleKeyboardLayout);
      visualViewport.removeEventListener("scroll", handleKeyboardLayout);
    };
  }, []);

  const toggleChat = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) {
      setBadgeVisible(false);
    } else {
      setKeyboardOffset(0);
    }
  };

  const dismissTooltip = () => {
    setTooltipDismissed(true);
  };

  const handleInputFocus = () => {
    window.setTimeout(() => {
      inputRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, 150);
  };

  const sendMessage = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || isLoading) return;

    const history = messages
      .filter((m) => m.role !== "error")
      .slice(-8)
      .map((m) => ({ role: m.role, content: m.content }));

    setMessages((prev) => [...prev, { id: createId(), role: "user", content: text }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });

      const data = (await response.json().catch(() => null)) as
        | { reply?: string; error?: string }
        | null;

      if (!response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "error",
            content: data?.error ?? "Something went wrong. Please try again.",
          },
        ]);
        return;
      }

      const reply = data?.reply?.trim();
      if (!reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "error",
            content: "The assistant didn't respond. Please try again.",
          },
        ]);
        return;
      }

      setMessages((prev) => [...prev, { id: createId(), role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "error",
          content: "Couldn't reach the assistant. Please check your connection and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") setOpen(false);
  };

  const hasUserMessage = messages.some((m) => m.role === "user");

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[90] flex flex-col items-end"
      style={{
        bottom: keyboardOffset > 0 ? `calc(${keyboardOffset}px + 1.25rem)` : undefined,
      }}
    >
      <AnimatePresence>
        {open ? (
          <motion.div
            key="chat-panel"
            role="dialog"
            aria-label="Chat with Denver's assistant"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 flex w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--nav-menu-bg)] shadow-[0_16px_48px_rgba(0,0,0,0.24)]"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              ...(keyboardOffset > 0 && viewportHeight
                ? { maxHeight: `calc(${viewportHeight}px - 5.5rem)` }
                : {}),
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-[var(--surface-border)] px-4 py-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--badge-accent-bg)] text-[var(--badge-accent-text)]">
                  <Bot size={16} />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-[var(--font-space-grotesk)] text-sm font-bold text-[var(--text-primary)]">
                    Ask Denver&apos;s Assistant
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--status-available)]" />
                    Online 
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--text-secondary)] transition duration-200 hover:bg-[var(--btn-secondary-bg)] hover:text-[var(--text-primary)]"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className={cn(
                "flex flex-col gap-3 overflow-y-auto px-4 py-4",
                keyboardOffset > 0
                  ? "min-h-0 flex-1"
                  : "max-h-[min(52dvh,420px)] min-h-[200px]"
              )}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] break-words rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
                      msg.role === "user" && "whitespace-pre-wrap",
                      msg.role === "user"
                        ? "rounded-br-md bg-[var(--accent)] text-[var(--accent-text-on)]"
                        : msg.role === "error"
                          ? "whitespace-pre-wrap rounded-bl-md border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] text-[var(--text-muted)]"
                          : "rounded-bl-md border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] text-[var(--text-primary)]"
                    )}
                  >
                    {msg.role === "assistant" ? (
                      <MarkdownContent content={msg.content} />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}

              {isLoading ? (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] px-4 py-3">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          delay: dot * 0.18,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Quick suggestions (only before the user has asked anything) */}
            {!hasUserMessage ? (
              <div className="flex flex-wrap gap-2 px-4 pb-1">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(suggestion)}
                    className="rounded-full border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] px-3 py-1.5 text-[11px] font-medium text-[var(--text-secondary)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : null}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-[var(--surface-border)] px-3 py-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={handleInputFocus}
                onKeyDown={handleKeyDown}
                maxLength={MAX_INPUT_LENGTH}
                placeholder={`Ask about ${cvData.personal.name.split(" ")[0]}...`}
                aria-label="Chat message"
                className="h-10 min-w-0 flex-1 rounded-full border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] px-4 text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-text-on)] transition duration-200 hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Greeting tooltip (before chat is opened) */}
      <AnimatePresence>
        {badgeVisible && !open && !tooltipDismissed ? (
          <motion.div
            key="chat-tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative mb-2 flex max-w-[230px] items-start gap-2 rounded-2xl rounded-br-md border border-[var(--surface-border)] bg-[var(--nav-menu-bg)] px-3.5 py-2.5 text-[12px] leading-snug text-[var(--text-primary)] shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            <p>👋 Got questions about Denver? Ask me!</p>
            <button
              type="button"
              onClick={dismissTooltip}
              aria-label="Dismiss greeting"
              className="-mr-1 -mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[var(--text-muted)] transition duration-200 hover:bg-[var(--btn-secondary-bg)] hover:text-[var(--text-primary)]"
            >
              <X size={12} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Floating action button */}
      <motion.button
        type="button"
        onClick={toggleChat}
        aria-label={
          badgeVisible
            ? "1 new message — open chat"
            : open
              ? "Close chat"
              : "Open chat"
        }
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-text-on)] shadow-[0_8px_28px_var(--accent-glow)] transition-colors duration-200 hover:bg-[var(--accent-hover)]"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}

        {/* Notification badge */}
        <AnimatePresence>
          {badgeVisible && !open ? (
            <motion.span
              key="chat-badge"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--accent-text-on)] text-[10px] font-bold text-[var(--accent)]"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
              <span className="relative z-10">1</span>
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
