import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay so it doesn't compete with page load
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[#0e1422] border border-[#2d6ca6]/12 rounded-xl p-5 md:p-6 shadow-2xl shadow-black/40">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#2d6ca6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield size={18} className="text-[#3d8fd4]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#d8dce4] text-sm uppercase tracking-[0.05em] mb-1">
                    Privacy & Cookies
                  </h3>
                  <p className="text-[#8a8f9a] text-sm leading-relaxed">
                    This website uses cookies and analytics to improve your experience. In compliance with <span className="text-[#3d8fd4]">POPIA</span> (South Africa) and <span className="text-[#3d8fd4]">GDPR</span> (EU), we only collect minimal, anonymised usage data. No personal information is shared with third parties.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0 ml-0 md:ml-4">
                <button
                  onClick={handleDecline}
                  className="font-[family-name:var(--font-heading)] text-xs font-medium uppercase tracking-[0.1em] px-4 py-2.5 rounded text-[#8a8f9a] border border-[#8a8f9a]/20 hover:border-[#8a8f9a]/40 hover:text-[#d8dce4] transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded bg-[#e8833a] text-white hover:bg-[#d4762f] transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
