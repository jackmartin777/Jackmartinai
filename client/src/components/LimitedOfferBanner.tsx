import { useState } from "react";
import { X, Zap } from "lucide-react";

interface LimitedOfferBannerProps {
  spotsRemaining: number;
  bookingUrl: string;
}

export default function LimitedOfferBanner({ spotsRemaining, bookingUrl }: LimitedOfferBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-[#e8833a]/10 to-[#e8833a]/5 border-b border-[#e8833a]/30 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <Zap size={18} className="text-[#e8833a] flex-shrink-0" />
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.15em] text-[#e8833a]">
              🚀 Limited Offer: Mac Mini M4 + Claude Code Setup
            </p>
            <p className="text-[#8a8f9a] text-xs mt-0.5">
              Only {spotsRemaining} {spotsRemaining === 1 ? "spot" : "spots"} left this quarter
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener"
            className="text-[#e8833a] hover:text-[#d4762f] font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] transition-colors"
          >
            Learn More
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-[#6b7080] hover:text-[#d8dce4] transition-colors"
            aria-label="Dismiss banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
