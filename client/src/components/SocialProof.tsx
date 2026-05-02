import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, Award, Zap } from "lucide-react";

const proofs = [
  { icon: Users, text: "3 new clients onboarded this month", time: "2 hours ago" },
  { icon: TrendingUp, text: "Godspeed Agency grew client revenue by 40%", time: "This week" },
  { icon: Award, text: "98% student pass rate at MyFiladelfia", time: "2025 cohort" },
  { icon: Zap, text: "New AI automation system deployed", time: "3 days ago" },
  { icon: Users, text: "Someone from Cape Town viewed this portfolio", time: "Just now" },
  { icon: TrendingUp, text: "AI Call Centre handling 200+ enquiries/week", time: "Live" },
  { icon: Award, text: "12 active projects on GitHub", time: "Updated today" },
  { icon: Zap, text: "New LLM workflow shipped for a client", time: "Yesterday" },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // First popup after 8 seconds
    const initialDelay = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || current < 0) return;

    // Hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    // Show next after 15 seconds
    const nextTimer = setTimeout(() => {
      const next = (current + 1) % proofs.length;
      setCurrent(next);
      setVisible(true);
    }, 15000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [current, dismissed]);

  if (dismissed || current < 0) return null;

  const proof = proofs[current];
  const Icon = proof.icon;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -80, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-24 left-5 z-40 max-w-xs"
        >
          <div className="bg-[#0e1422] border border-[#2d6ca6]/15 rounded-lg p-4 shadow-xl shadow-black/30 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#e8833a]/10 flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-[#e8833a]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#d8dce4] text-sm font-medium leading-tight">{proof.text}</p>
              <p className="text-[#6b7080] text-xs mt-1">{proof.time}</p>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="text-[#6b7080]/50 hover:text-[#d8dce4] text-xs flex-shrink-0 ml-1"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
