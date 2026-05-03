import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Globe, Download, MessageCircle, Calendar, Brain, Heart, Scale } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import SocialProof from "@/components/SocialProof";

import ChatWidget from "@/components/ChatWidget";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const }
  })
};

const projects = [
  { name: "Donna AI", description: "AI-powered WhatsApp assistant with 20+ service integrations — handles scheduling, content delivery, and automated client communication via n8n workflows.", tech: ["n8n", "WhatsApp", "AI Agents"], category: "AI & Automation", url: "#" },
  { name: "Agentic Marketing Optimisation", description: "Predictive lead scoring and real-time campaign decisions — reduces cost-per-acquisition by routing spend to highest-converting audiences automatically.", tech: ["Python", "Flask", "ML", "APIs"], category: "AI & Automation", url: "https://github.com/jackmartin777/software-income-playbooks" },
  { name: "MyFiladelfia AI Call Centre", description: "Autonomous AI agent handling 200+ student enquiries per week — qualification checks, course recommendations, and application routing without human intervention.", tech: ["AI Agents", "Voice", "Automation"], category: "AI & Automation", url: "https://github.com/jackmartin777/Myfiladeflia-call-centre-2026" },
  { name: "Everything Claude Code", description: "Performance optimization framework for AI coding agents — skills, instincts, memory systems, and security protocols for production-grade AI development.", tech: ["JavaScript", "AI Agents", "Claude"], category: "AI & Automation", url: "https://github.com/jackmartin777/everything-claude-code" },
  { name: "Oh My ClaudeCode", description: "Multi-agent orchestration system coordinating teams of AI agents — task delegation, memory sharing, and collaborative problem-solving at scale.", tech: ["TypeScript", "Multi-Agent", "Orchestration"], category: "AI & Automation", url: "https://github.com/jackmartin777/oh-my-claudecode" },
  { name: "OpenClaw / Neuroshell", description: "Autonomous AI agent platform with a neurodivergent productivity vertical — 8-skill suite designed for ADHD/ASD users. Bilingual EN/AF architecture.", tech: ["AI Agents", "ADHD", "Productivity"], category: "AI & Automation", url: "#" },
  { name: "Agency Agents", description: "Complete AI agency framework — specialized expert agents with defined personalities, processes, and deliverables for client work automation.", tech: ["AI Agents", "Automation", "Agency"], category: "AI & Automation", url: "https://github.com/jackmartin777/agency-agents" },
  { name: "Godspeed Digital Agency", description: "Full-service digital agency website — SEO, AI content strategy, and marketing automation services for SMEs.", tech: ["TypeScript", "React", "Tailwind"], category: "Websites", url: "https://github.com/jackmartin777/godspeed-digital-agency" },
  { name: "MyFiladelfia 2026", description: "Training institution platform — QCTO-accredited course catalogue, student portal, and online applications.", tech: ["TypeScript", "React", "CMS"], category: "Websites", url: "https://github.com/jackmartin777/2026-newmyfiladelfia-page" },
  { name: "Golden Journeys", description: "Travel and tourism website showcasing curated South African experiences with booking integration.", tech: ["React", "Design", "CMS"], category: "Websites", url: "https://github.com/jackmartin777/Golden-Journeys" },
  { name: "Journiv App", description: "Bible study journaling app — integrating Scripture engagement with personal reflection and community sharing.", tech: ["JavaScript", "Mobile", "Ministry"], category: "Ministry & Education", url: "https://github.com/jackmartin777/journiv-app" },
  { name: "Software Income Playbooks", description: "Curated monetization frameworks and API-first business models for founders, agencies, and automation builders.", tech: ["JavaScript", "Business", "APIs"], category: "Strategy", url: "https://github.com/jackmartin777/software-income-playbooks" },
];

const categories = ["All", "AI & Automation", "Websites", "Ministry & Education", "Strategy"];

const categoryStyle: Record<string, string> = {
  "AI & Automation": "text-[#fb7103] bg-[#fb7103]/8 border-[#fb7103]/15",
  "Websites": "text-[#3d8fd4] bg-[#2d6ca6]/10 border-[#2d6ca6]/20",
  "Ministry & Education": "text-[#3d8fd4] bg-[#2d6ca6]/10 border-[#2d6ca6]/20",
  "Strategy": "text-[#fb7103] bg-[#fb7103]/8 border-[#fb7103]/15",
};

function LogoHeading({ silver, orange }: { silver: string; orange: string }) {
  return (
    <h2 className="font-[family-name:var(--font-heading)] font-bold uppercase tracking-[0.2em] text-2xl md:text-3xl">
      <span className="text-[#d8dce4]">{silver} </span>
      <span className="text-[#fb7103]">{orange}</span>
    </h2>
  );
}

export default function Home() {
  const { } = useAuth();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#010b1c]">
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: `url('/manus-storage/brain-heart-bg_58cce87d.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#010b1c]/90 border-b border-[#2d6ca6]/10">
          <div className="container flex items-center justify-between py-3">
            <a href="#" className="flex items-center">
              <img src="/manus-storage/jm-logo-v2_1d412303.png" alt="Jack Martin" className="h-20 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-6 font-[family-name:var(--font-heading)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b7080]">
              <a href="#about" className="hover:text-[#d8dce4] transition-colors">About</a>
              <a href="#ai" className="hover:text-[#fb7103] transition-colors">AI & Automation</a>
              <a href="#experience" className="hover:text-[#d8dce4] transition-colors">Experience</a>
              <a href="#portfolio" className="hover:text-[#fb7103] transition-colors">Portfolio</a>
              <a href="#limited-offer" className="hover:text-[#fb7103] transition-colors">Limited Offer</a>
              <a href="#contact" className="hover:text-[#d8dce4] transition-colors">Contact</a>
            </div>
            <a href="https://tidycal.com/jackmartin/15-min-call" target="_blank" rel="noopener" className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded bg-[#fb7103] text-white hover:bg-[#e05e00] transition-colors flex items-center gap-2">
              <Calendar size={13} /> Book a Discovery Call
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center pt-32 md:pt-24" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Jack Martin" />
          <meta itemProp="jobTitle" content="AI Consultant, AI Automator, Digital Strategist" />
          <div className="container">
            <motion.div initial="hidden" animate="visible" className="max-w-5xl">
              <motion.p variants={fadeUp} custom={0} className="font-[family-name:var(--font-heading)] text-xs font-medium uppercase tracking-[0.25em] text-[#6b7080] mb-6">
                AI & Automation <span className="text-[#2d6ca6] mx-1">|</span> Digital Strategy <span className="text-[#2d6ca6] mx-1">|</span> Human-Centred Innovation
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="font-[family-name:var(--font-heading)] font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.15] mb-6 text-[#d8dce4]">
                AI Systems That <span className="text-[#fb7103]">Actually Work.</span>
              </motion.h1>

              {/* UVP Block */}
              <motion.p variants={fadeUp} custom={2} className="text-sm md:text-base text-[#8a8f9a] max-w-2xl leading-relaxed mb-8 border-l-2 border-[#fb7103]/30 pl-4">
                AI automation, digital strategy, and 15 years cross-sector delivery. Not a niche — a system.
              </motion.p>

              {/* Stats Strip */}
              <motion.div variants={fadeUp} custom={3} className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
                {[
                  { num: "98%", label: "Pass Rate" },
                  { num: "85%", label: "Employment" },
                  { num: "10+", label: "Years AI/Digital" },
                  { num: "15+", label: "Years Cross-Sector" },
                  { num: "30+", label: "Years MyFiladelfia" },
                  { num: "3", label: "Active Ventures" },
                ].map(stat => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-[#0e1422] border border-white/5">
                    <div className="font-[family-name:var(--font-heading)] font-bold text-xl md:text-2xl text-[#fb7103]">{stat.num}</div>
                    <div className="text-[#6b7080] text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.1em]">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3 mb-8">
                <a href="https://tidycal.com/jackmartin/15-min-call" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-[#fb7103] text-white hover:bg-[#e05e00] transition-colors">
                  <Calendar size={14} /> Book a Discovery Call
                </a>
                <a href="/manus-storage/Jack_Martin_CV_Final_e1fbbd18.pdf" download="Jack_Martin_CV.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-transparent text-[#c8ccd4] border border-[#c8ccd4]/20 hover:border-[#c8ccd4]/40 transition-colors">
                  <Download size={14} /> Download CV
                </a>
              </motion.div>

              {/* 3-Button Audience Routing */}
              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap gap-3 mb-10">
                <a href="#ai" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0e1422] border border-[#fb7103]/15 text-[#c8ccd4] text-sm hover:border-[#fb7103]/40 transition-colors">
                  <Brain size={16} className="text-[#fb7103]" /> I need AI systems built
                </a>
                <a href="#portfolio" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0e1422] border border-[#2d6ca6]/15 text-[#c8ccd4] text-sm hover:border-[#2d6ca6]/40 transition-colors">
                  <Scale size={16} className="text-[#3d8fd4]" /> I want digital strategy consulting
                </a>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={fadeUp} custom={6} className="flex flex-wrap gap-5 text-sm text-[#6b7080]">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#2d6ca6]" /> Paarl, Western Cape</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-[#2d6ca6]" /> +27 671 334 194</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-[#fb7103]" /> jack@jackmartin.co.za</span>
                <a href="https://linkedin.com/in/jackmartin777" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-[#d8dce4] transition-colors"><Linkedin size={14} className="text-[#2d6ca6]" /> LinkedIn</a>
                <a href="https://github.com/jackmartin777" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-[#d8dce4] transition-colors"><Github size={14} className="text-[#c8ccd4]" /> GitHub</a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI & Automation */}
        <section id="ai" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-8">
                <LogoHeading silver="AI &" orange="AUTOMATION" />
                <p className="text-[#8a8f9a] text-base mt-4 max-w-3xl">
                  Jack designs AI systems that work in the real world — not proofs of concept. From agentic pipelines to predictive lead scoring, the focus is always measurable outcome, not impressive tech.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <motion.div variants={fadeUp} custom={1} className="bg-[#0e1422] border border-[#2d6ca6]/10 rounded-lg p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-[0.2em] text-[#3d8fd4] mb-4">Capabilities</h3>
                  <ul className="space-y-2.5 text-[#c8ccd4]/80 text-[15px]">
                    {["End-to-end AI workflows (data → prediction → action)", "Applied ML (lead scoring, conversion prediction)", "API-based AI services (Flask, model integration)", "Automation (Make, Zapier, n8n, Pipedream)", "Prompt engineering & LLM workflows", "Agentic AI (multi-agent, memory systems)"].map(item => (
                      <li key={item} className="flex items-start gap-2.5"><span className="text-[#2d6ca6] mt-0.5 text-xs">▸</span> {item}</li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} custom={2} className="bg-[#0e1422] border border-[#fb7103]/8 rounded-lg p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-[0.2em] text-[#fb7103] mb-4">Marketing & Data</h3>
                  <ul className="space-y-2.5 text-[#c8ccd4]/80 text-[15px]">
                    {["AI-driven paid acquisition (Meta, TikTok, YouTube)", "Funnel optimisation & behavioural tracking", "Conversion-focused systems & testing", "Data scoring (conversion readiness, quality)", "SEO automation & content pipelines", "Performance analytics & attribution"].map(item => (
                      <li key={item} className="flex items-start gap-2.5"><span className="text-[#fb7103] mt-0.5 text-xs">▸</span> {item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <motion.div variants={fadeUp} custom={3}>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-[0.2em] text-[#c8ccd4]/60 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Vibe Coding", "Flask", "Node.js", "Redis", "APIs", "Replit", "Make", "Zapier", "n8n", "Pipedream", "ChatGPT", "Claude", "Perplexity", "Mistral", "DeepSeek"].map(tag => (
                    <span key={tag} className="font-[family-name:var(--font-mono)] text-[11px] text-[#3d8fd4]/70 bg-[#2d6ca6]/6 border border-[#2d6ca6]/12 px-3 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>



        {/* Experience */}
        <section id="experience" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-10">
                <LogoHeading silver="EXPERI" orange="ENCE" />
              </motion.div>
              <div className="space-y-4">
                {[
                  { role: "Founder & Digital Strategist", company: "Godspeed Digital Agency", date: "2019 — Present", bullets: ["Founded Godspeed Digital in 2019 to bring enterprise-grade AI systems to small and mid-size businesses", "Builds end-to-end pipelines from data ingestion to automated action — clients see measurable ROI within 60 days", "AI-driven paid acquisition, funnel automation, and content systems serving clients across South Africa"], primary: true },
                  { role: "Director & Founder", company: "MyFiladelfia — Skills Development & Training", date: "1990s — Present", bullets: ["Founded MyFiladelfia — now a QCTO-accredited training institution offering biblical counselling and professional development programmes", "98% pass rate across all cohorts. 85% post-graduation employment rate", "Pioneered hybrid learning models integrating AI-driven mental health support tools"], primary: true },
                  { role: "Director — Healthcare Operations", company: "De Oude Renbaan Sub-Acute Clinic", date: "2012 — 2024", bullets: ["Directed operations for a sub-acute healthcare clinic, managing regulatory compliance, digital systems integration, and patient care administration", "Bridged clinical governance and technology implementation — streamlined admin through digital solutions"], primary: false },
                  { role: "Franchise Owner · Research Assistant", company: "Curves Wellington · Synexa Life Sciences · The Doctors Lab, London", date: "2002 — 2010", bullets: ["Biomarker research and clinical analysis at Synexa Life Sciences and The Doctors Laboratory, London", "Established and grew a women's wellness franchise through digital marketing strategies"], primary: false },
                ].map((exp, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className={`bg-[#0e1422] rounded-lg p-6 border-l-[3px] ${exp.primary ? 'border-l-[#fb7103]' : 'border-l-[#2d6ca6]/40'} border border-white/[0.03]`}>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#d8dce4] text-base uppercase tracking-[0.05em]">{exp.role}</h3>
                      <span className={`font-[family-name:var(--font-mono)] text-xs font-medium ${exp.primary ? 'text-[#fb7103]' : 'text-[#6b7080]'}`}>{exp.date}</span>
                    </div>
                    <p className="text-[#6b7080] text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-[#c8ccd4]/65 text-[15px] flex items-start gap-2">
                          <span className={exp.primary ? 'text-[#fb7103]' : 'text-[#2d6ca6]/60'}>→</span> {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio with Filter Tabs */}
        <section id="portfolio" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-8">
                <LogoHeading silver="PORTFOLIO &" orange="GITHUB FORKS" />
                <p className="text-[#6b7080] text-base mt-3 max-w-lg">Websites built, AI systems, automation tools, and curated projects.</p>
              </motion.div>
              {/* Filter Tabs */}
              <motion.div variants={fadeUp} custom={1} className="flex flex-wrap gap-2 mb-8">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setActiveFilter(cat)} className={`font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded transition-colors ${activeFilter === cat ? 'bg-[#fb7103] text-white' : 'bg-[#0e1422] text-[#6b7080] border border-white/5 hover:text-[#d8dce4]'}`}>
                    {cat}
                  </button>
                ))}
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project, i) => (
                  <motion.a key={project.name} href={project.url} target="_blank" rel="noopener" variants={fadeUp} custom={i + 2} className="group bg-[#0e1422] border border-white/[0.03] rounded-lg p-5 hover:border-[#2d6ca6]/20 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] px-2 py-0.5 rounded border ${categoryStyle[project.category] || "text-[#6b7080] bg-white/5 border-white/10"}`}>{project.category}</span>
                      <ExternalLink size={13} className="text-[#6b7080]/30 group-hover:text-[#fb7103] transition-colors" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#d8dce4] text-sm uppercase tracking-[0.03em] mb-2 group-hover:text-[#fb7103] transition-colors">{project.name}</h3>
                    <p className="text-[#6b7080] text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-[family-name:var(--font-mono)] text-[#3d8fd4]/40 border border-[#2d6ca6]/10 px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Limited Offer */}
        <section id="limited-offer" className="py-24 bg-[#0e1422]/40 border-y border-[#fb7103]/10">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-8">
                <LogoHeading silver="LIMITED" orange="OFFER" />
                <p className="text-[#8a8f9a] text-base mt-3 max-w-lg">Complete AI development environment setup with Mac Mini M4 hardware included.</p>
              </motion.div>
              <motion.div variants={fadeUp} custom={1}>
                <div className="bg-gradient-to-br from-[#0e1422] to-[#010b1c] border border-[#fb7103]/20 rounded-lg p-8 relative overflow-hidden">
                  {/* Accent glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#fb7103]/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fb7103]">🚀 Limited Offer</span>
                        </div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl md:text-2xl uppercase tracking-[0.05em] text-[#d8dce4]">
                          Mac Mini M4 + Claude Code Setup
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-[#fb7103] font-bold text-2xl">R29,500</div>
                        <div className="text-[#6b7080] text-xs">50% deposit: R14,750</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#8a8f9a] text-base leading-relaxed mb-6 border-l-2 border-[#fb7103]/30 pl-4">
                      Complete AI development environment setup including Mac Mini M4 hardware, Claude Code IDE configuration, OpenClaw integration, hands-on training, and 14-day support. Everything you need to start building AI systems.
                    </p>

                    {/* Included Items */}
                    <div className="mb-6">
                      <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.15em] text-[#d8dce4] mb-3">
                        What's Included
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {[
                          "Mac Mini M4 hardware (fully configured & optimized)",
                          "Claude Code IDE setup & extensions",
                          "OpenClaw integration & workflow setup",
                          "2-hour hands-on training session (remote or in-person Paarl)",
                          "14-day WhatsApp + email support",
                          "Custom automation templates (2–3 starter workflows)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#c8ccd4]/80 text-sm">
                            <span className="text-[#fb7103] mt-0.5 text-xs">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Availability */}
                    <div className="mb-6 p-4 bg-[#fb7103]/5 border border-[#fb7103]/20 rounded-lg">
                      <p className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.15em] text-[#fb7103]">
                        ⏰ Only 2 spots left this quarter (Q2 2026)
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://tidycal.com/jackmartin/15-min-call"
                        target="_blank"
                        rel="noopener"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-[#fb7103] text-white hover:bg-[#e05e00] transition-colors"
                      >
                        <Calendar size={14} /> Book Your Setup Slot
                      </a>
                      <a
                        href="https://wa.me/27671334194?text=Hi%20Jack%2C%20I%27m%20interested%20in%20the%20Mac%20Mini%20M4%20%2B%20Claude%20Code%20setup%20offer."
                        target="_blank"
                        rel="noopener"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-transparent text-[#c8ccd4] border border-[#c8ccd4]/20 hover:border-[#c8ccd4]/40 transition-colors"
                      >
                        Questions? WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-10">
                <LogoHeading silver="EDUCA" orange="TION" />
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { degree: "Master of Divinity", school: "SA Theological Seminary", year: "2025 — In Progress", current: true, desc: "Research Focus: Pastoral Emotional Strain & AI-Assisted Care Systems in Ministry Contexts." },

                  { degree: "B.Sc. (Hons) Molecular Microbiology", school: "Stellenbosch University", year: "2002", current: false, desc: "Foundation in biomarker research and systems biology — informs data-driven approaches to health tech." },
                  { degree: "Bachelor of Science", school: "Stellenbosch University", year: "1999 — 2001", current: false, desc: "" },
                  { degree: "Cert. Digital Marketing", school: "Elite Inc.", year: "2019", current: false, desc: "" },
                ].map((edu, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className={`bg-[#0e1422] rounded-lg p-5 border-t-[3px] ${edu.current ? 'border-t-[#fb7103]' : 'border-t-[#2d6ca6]/30'} border border-white/[0.03]`}>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#d8dce4] text-xs uppercase tracking-[0.05em] mb-1">{edu.degree}</h3>
                    <p className="text-[#6b7080] text-xs">{edu.school}</p>
                    <p className={`font-[family-name:var(--font-mono)] text-xs font-medium mt-1 ${edu.current ? 'text-[#fb7103]' : 'text-[#3d8fd4]/60'}`}>{edu.year}</p>
                    {edu.desc && <p className="text-[#8a8f9a] text-[11px] mt-2 leading-relaxed">{edu.desc}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chat Widget */}
        <ChatWidget />

        {/* Social Proof */}
        <SocialProof />



        {/* WhatsApp */}
        <a href="https://wa.me/27671334194" target="_blank" rel="noopener" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/25 hover:scale-110 transition-transform" aria-label="Chat on WhatsApp">
          <MessageCircle size={26} className="text-white" />
        </a>

        {/* Footer — Rebuilt */}
        <footer id="contact" className="py-16 border-t border-[#2d6ca6]/8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Brand */}
              <div>
                <img src="/manus-storage/jm-logo-v2_1d412303.png" alt="Jack Martin" className="h-14 w-auto mb-4" />
                <p className="text-[#8a8f9a] text-sm leading-relaxed">
                  Where AI systems meet human complexity. Built for organisations that can't afford to get it wrong.
                </p>
              </div>
              {/* Quick Links */}
              <div>
                <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.15em] text-[#d8dce4] mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm text-[#6b7080]">
                  <a href="#ai" className="block hover:text-[#fb7103] transition-colors">AI & Automation</a>
                  <a href="#experience" className="block hover:text-[#fb7103] transition-colors">Experience</a>
                  <a href="#portfolio" className="block hover:text-[#fb7103] transition-colors">Portfolio</a>
                  <a href="#education" className="block hover:text-[#fb7103] transition-colors">Education</a>
                </div>
              </div>
              {/* Contact */}
              <div>
                <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.15em] text-[#d8dce4] mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-[#6b7080]">
                  <p className="flex items-center gap-2"><Mail size={14} className="text-[#fb7103]" /> jack@jackmartin.co.za</p>
                  <p className="flex items-center gap-2"><Phone size={14} className="text-[#2d6ca6]" /> +27 671 334 194</p>
                  <p className="flex items-center gap-2"><MapPin size={14} className="text-[#2d6ca6]" /> Paarl, Western Cape, South Africa</p>
                  <div className="flex items-center gap-3 mt-3">
                    <a href="https://linkedin.com/in/jackmartin777" target="_blank" rel="noopener" className="text-[#6b7080] hover:text-[#2d6ca6] transition-colors"><Linkedin size={18} /></a>
                    <a href="https://github.com/jackmartin777" target="_blank" rel="noopener" className="text-[#6b7080] hover:text-[#d8dce4] transition-colors"><Github size={18} /></a>
                    <a href="https://bold.pro/my/johnhenryjack-martin" target="_blank" rel="noopener" className="text-[#6b7080] hover:text-[#fb7103] transition-colors"><Globe size={18} /></a>
                  </div>
                </div>
                <a href="https://tidycal.com/jackmartin/15-min-call" target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.1em] bg-[#fb7103] text-white hover:bg-[#e05e00] transition-colors">
                  <Calendar size={12} /> Book a Call
                </a>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-[#2d6ca6]/8 text-center">
            <p className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.2em] text-[#6b7080]/40">
              AI Consultant • Biblical Counsellor • Digital Strategist • Paarl, South Africa
            </p>
            <p className="text-[#6b7080]/30 text-[10px] mt-2">
              By visiting this site, you agree to our use of cookies and analytics for improving your experience. We collect minimal, anonymised data in compliance with POPIA and GDPR.
            </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
