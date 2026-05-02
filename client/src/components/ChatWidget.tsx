import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Hey there! 👋 I'm Jack's AI assistant. Whether you're looking for help with AI automation, digital strategy, or just curious about what's possible — I'm here to help. What's on your mind?",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const chatMutation = trpc.chat.send.useMutation({
    onSuccess: (data) => {
      setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
    },
    onError: () => {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I hit a snag. Could you try that again?" }]);
    },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, chatMutation.isPending]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || chatMutation.isPending) return;

    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");

    // Send all messages (excluding the initial greeting for context)
    chatMutation.mutate({
      messages: newMessages.filter((_, i) => i > 0), // skip initial assistant greeting
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 bg-gradient-to-br from-[#e8833a] to-[#d4762f] rounded-full flex items-center justify-center shadow-lg shadow-[#e8833a]/25 hover:scale-110 transition-transform"
              aria-label="Open chat"
            >
              <MessageSquare size={24} className="text-white" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#0e1422] border border-[#e8833a]/20 text-[#e8833a] font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full shadow-lg shadow-black/20 hover:bg-[#e8833a] hover:text-white transition-colors"
            >
              Ask me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-120px)] bg-[#0e1422] border border-[#2d6ca6]/15 rounded-xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2d6ca6]/10 bg-[#0a0f1a]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e8833a] to-[#d4762f] flex items-center justify-center">
                  <MessageSquare size={14} className="text-white" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] text-[#d8dce4]">Jack's AI Assistant</p>
                  <p className="text-[10px] text-[#6b7080]">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#6b7080] hover:text-[#d8dce4] transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#e8833a] text-white rounded-br-sm"
                      : "bg-[#1a2235] text-[#c8ccd4] border border-[#2d6ca6]/10 rounded-bl-sm"
                  }`}>
                    {msg.role === "assistant" ? (
                      <Streamdown>{msg.content}</Streamdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {chatMutation.isPending && (
                <div className="flex justify-start">
                  <div className="bg-[#1a2235] border border-[#2d6ca6]/10 rounded-lg rounded-bl-sm px-3.5 py-2.5">
                    <Loader2 size={16} className="animate-spin text-[#3d8fd4]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-[#2d6ca6]/10 bg-[#0a0f1a]">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  className="flex-1 resize-none bg-[#1a2235] border border-[#2d6ca6]/10 rounded-lg px-3 py-2.5 text-sm text-[#d8dce4] placeholder-[#6b7080] focus:outline-none focus:border-[#e8833a]/30 transition-colors"
                  style={{ maxHeight: '80px' }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || chatMutation.isPending}
                  className="w-9 h-9 rounded-lg bg-[#e8833a] flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#d4762f] transition-colors flex-shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
