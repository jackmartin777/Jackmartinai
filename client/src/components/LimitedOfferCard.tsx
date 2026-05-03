import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Zap } from "lucide-react";

interface LimitedOfferCardProps {
  title: string;
  description: string;
  price: number; // in ZAR cents
  deposit: number; // in ZAR cents
  spotsRemaining: number;
  includedItems: string[];
  bookingUrl: string;
  whatsappUrl: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const }
  })
};

export default function LimitedOfferCard({
  title,
  description,
  price,
  deposit,
  spotsRemaining,
  includedItems,
  bookingUrl,
  whatsappUrl,
}: LimitedOfferCardProps) {
  const priceZAR = (price / 100).toFixed(0);
  const depositZAR = (deposit / 100).toFixed(0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      custom={0}
      className="bg-gradient-to-br from-[#0e1422] to-[#0a0f1a] border border-[#e8833a]/20 rounded-lg p-8 relative overflow-hidden"
    >
      {/* Accent glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#e8833a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={16} className="text-[#e8833a]" />
              <span className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[#e8833a]">
                Limited Offer
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl md:text-2xl uppercase tracking-[0.05em] text-[#d8dce4]">
              {title}
            </h3>
          </div>
          <div className="text-right">
            <div className="text-[#e8833a] font-bold text-2xl">R{priceZAR}</div>
            <div className="text-[#6b7080] text-xs">50% deposit: R{depositZAR}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#8a8f9a] text-base leading-relaxed mb-6 border-l-2 border-[#e8833a]/30 pl-4">
          {description}
        </p>

        {/* Included Items */}
        <div className="mb-6">
          <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.15em] text-[#d8dce4] mb-3">
            What's Included
          </h4>
          <ul className="space-y-2">
            {includedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#c8ccd4]/80 text-sm">
                <CheckCircle2 size={16} className="text-[#e8833a] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div className="mb-6 p-4 bg-[#e8833a]/5 border border-[#e8833a]/20 rounded-lg">
          <p className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.15em] text-[#e8833a]">
            ⏰ Only {spotsRemaining} {spotsRemaining === 1 ? "spot" : "spots"} left this quarter
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-[#e8833a] text-white hover:bg-[#d4762f] transition-colors"
          >
            <Calendar size={14} /> Book Your Setup Slot
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-transparent text-[#c8ccd4] border border-[#c8ccd4]/20 hover:border-[#c8ccd4]/40 transition-colors"
          >
            Questions? WhatsApp me
          </a>
        </div>
      </div>
    </motion.div>
  );
}
