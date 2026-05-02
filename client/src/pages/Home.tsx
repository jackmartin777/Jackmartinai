import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Globe, Download, MessageCircle } from "lucide-react";
import SocialProof from "@/components/SocialProof";
import CookieConsent from "@/components/CookieConsent";

/*
 * DESIGN SYSTEM — pixel-matched to JM logo:
 *
 * BG:           #0a0f1a (very dark navy, near-black)
 * Card BG:      #0e1422 (slightly lighter for depth)
 * Silver text:  #c8ccd4 (body), #d8dce4 (headings — "JACK")
 * Orange:       #e8833a (primary — "MARTIN", accents)
 * Deep blue:    #2d6ca6 (circuit nodes — muted, NOT sky blue)
 * Blue glow:    #3d8fd4 (subtle glow)
 * Muted grey:   #6b7080 (tagline, secondary text)
 * Font:         Montserrat — uppercase, letter-spaced for headings
 *               Inter — body text
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const }
  })
};

const projects = [
  { name: "Godspeed Digital Agency", description: "Full-service digital agency website — SEO, AI content strategy, and marketing automation services.", tech: ["TypeScript", "React", "Tailwind"], category: "Website Built", url: "https://github.com/jackmartin777/godspeed-digital-agency" },
  { name: "MyFiladelfia 2026", description: "Training institution website — QCTO-accredited courses, student portal, and online applications.", tech: ["TypeScript", "React", "CMS"], category: "Website Built", url: "https://github.com/jackmartin777/2026-newmyfiladelfia-page" },
  { name: "Golden Journeys", description: "Travel and tourism website showcasing curated South African experiences.", tech: ["React", "Design", "CMS"], category: "Website Built", url: "https://github.com/jackmartin777/Golden-Journeys" },
  { name: "Kunsmatige Intelligensie", description: "AI education platform — making AI accessible in Afrikaans.", tech: ["TypeScript", "StackBlitz", "Education"], category: "Website Built", url: "https://github.com/jackmartin777/kunsmatigeintelligensie" },
  { name: "Agentic Marketing Optimisation", description: "ML + automation pipeline for real-time campaign decisions and predictive prioritisation.", tech: ["Python", "Flask", "ML", "APIs"], category: "AI & Automation", url: "https://github.com/jackmartin777/software-income-playbooks" },
  { name: "Project N.O.M.A.D", description: "Self-contained, offline survival computer packed with critical tools, knowledge, and AI.", tech: ["TypeScript", "AI", "Offline-First"], category: "AI & Automation", url: "https://github.com/jackmartin777/project-nomad" },
  { name: "Everything Claude Code", description: "Agent harness performance optimization — skills, instincts, memory, and research-first development.", tech: ["JavaScript", "AI Agents", "Claude"], category: "AI & Automation", url: "https://github.com/jackmartin777/everything-claude-code" },
  { name: "Oh My ClaudeCode", description: "Teams-first multi-agent orchestration for Claude Code — coordinating AI agents at scale.", tech: ["TypeScript", "Multi-Agent", "Orchestration"], category: "AI & Automation", url: "https://github.com/jackmartin777/oh-my-claudecode" },
  { name: "Agency Agents", description: "A complete AI agency — specialized expert agents with personality, processes, and proven deliverables.", tech: ["AI Agents", "Automation", "Agency"], category: "AI & Automation", url: "https://github.com/jackmartin777/agency-agents" },
  { name: "Claude Memory System", description: "Plugin that captures coding sessions, compresses with AI, and injects context into future sessions.", tech: ["TypeScript", "Claude", "Memory"], category: "GitHub Fork", url: "https://github.com/jackmartin777/claude-mem" },
  { name: "Dexter Finance", description: "Autonomous agent for deep financial research — AI-driven market analysis and insights.", tech: ["TypeScript", "AI", "Finance"], category: "GitHub Fork", url: "https://github.com/jackmartin777/dexterfinance" },
  { name: "MyFiladelfia AI Call Centre", description: "AI Agent-powered call centre — automated student support and enquiry handling.", tech: ["AI Agents", "Voice", "Automation"], category: "AI & Automation", url: "https://github.com/jackmartin777/Myfiladeflia-call-centre-2026" },
  { name: "Awesome LLM Apps", description: "Collection of LLM applications with AI Agents and RAG using OpenAI, Anthropic, Gemini.", tech: ["Python", "RAG", "LLMs", "Agents"], category: "GitHub Fork", url: "https://github.com/jackmartin777/awesome-llm-apps" },
  { name: "Journiv App", description: "Bible study journaling app — integrating Scripture engagement with personal reflection.", tech: ["JavaScript", "Mobile", "Ministry"], category: "Education & Ministry", url: "https://github.com/jackmartin777/journiv-app" },
  { name: "Software Income Playbooks", description: "Curated monetization playbooks and API ideas for founders, agencies, and automation builders.", tech: ["JavaScript", "Business", "APIs"], category: "Business & Strategy", url: "https://github.com/jackmartin777/software-income-playbooks" },
];

const categoryStyle: Record<string, string> = {
  "Website Built": "text-[#3d8fd4] bg-[#2d6ca6]/10 border-[#2d6ca6]/20",
  "AI & Automation": "text-[#e8833a] bg-[#e8833a]/8 border-[#e8833a]/15",
  "GitHub Fork": "text-[#6b7080] bg-[#6b7080]/8 border-[#6b7080]/15",
  "Education & Ministry": "text-[#3d8fd4] bg-[#2d6ca6]/10 border-[#2d6ca6]/20",
  "Business & Strategy": "text-[#e8833a] bg-[#e8833a]/8 border-[#e8833a]/15",
};

// Heading component matching the logo's "JACK MARTIN" style
function LogoHeading({ silver, orange, className = "" }: { silver: string; orange: string; className?: string }) {
  return (
    <h2 className={`font-[family-name:var(--font-heading)] font-bold uppercase tracking-[0.2em] text-2xl md:text-3xl ${className}`}>
      <span className="text-[#d8dce4]">{silver} </span>
      <span className="text-[#e8833a]">{orange}</span>
    </h2>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0f1a]">
      {/* Background watermark */}
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: `url('/manus-storage/brain-heart-bg_58cce87d.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f1a]/90 border-b border-[#2d6ca6]/10">
          <div className="container flex items-center justify-between py-3">
            <a href="#" className="flex items-center">
              <img src="/manus-storage/jm-logo-v2_1d412303.png" alt="Jack Martin" className="h-20 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-heading)] text-xs font-medium uppercase tracking-[0.15em] text-[#6b7080]">
              <a href="#about" className="hover:text-[#d8dce4] transition-colors">About</a>
              <a href="#ai" className="hover:text-[#e8833a] transition-colors">AI & Automation</a>
              <a href="#experience" className="hover:text-[#d8dce4] transition-colors">Experience</a>
              <a href="#portfolio" className="hover:text-[#e8833a] transition-colors">Portfolio</a>
              <a href="#education" className="hover:text-[#d8dce4] transition-colors">Education</a>
            </div>
            <a href="mailto:jack@jackmartin.co.za" className="font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded bg-[#e8833a] text-white hover:bg-[#d4762f] transition-colors">
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Hero Section — matches logo layout: JACK (silver) MARTIN (orange) */}
        <section id="about" className="min-h-screen flex items-center pt-24">
          <div className="container">
            <motion.div initial="hidden" animate="visible" className="max-w-4xl">
              <motion.p variants={fadeUp} custom={0} className="font-[family-name:var(--font-heading)] text-xs font-medium uppercase tracking-[0.25em] text-[#6b7080] mb-6">
                AI Consultant <span className="text-[#2d6ca6] mx-1">•</span> Digital Strategist <span className="text-[#2d6ca6] mx-1">•</span> Human Centred
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="font-[family-name:var(--font-heading)] font-bold uppercase tracking-[0.15em] text-5xl md:text-7xl lg:text-8xl leading-[1] mb-8">
                <span className="text-[#d8dce4]">JACK </span>
                <span className="text-[#e8833a]">MARTIN</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-[#8a8f9a] max-w-2xl leading-relaxed mb-8">
                10+ years leveraging technology to empower individuals, businesses, and communities. Bridging psychology, AI-driven innovation, and digital transformation to create scalable solutions.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3 mb-10">
                <a href="/manus-storage/Jack_Martin_CV_Final_e1fbbd18.pdf" download="Jack_Martin_CV.pdf" className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-[#e8833a] text-white hover:bg-[#d4762f] transition-colors">
                  <Download size={14} /> Download CV
                </a>
                <a href="/manus-storage/Jack_Martin_CV_Monochrome_70d3e2e7.pdf" download="Jack_Martin_CV_Monochrome.pdf" className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.1em] bg-transparent text-[#c8ccd4] border border-[#c8ccd4]/20 hover:border-[#c8ccd4]/40 transition-colors">
                  <Download size={14} /> Monochrome CV
                </a>
              </motion.div>
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-5 text-sm text-[#6b7080]">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#2d6ca6]" /> Paarl, Western Cape</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-[#2d6ca6]" /> +27 767 337 890</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-[#e8833a]" /> jack@jackmartin.co.za</span>
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
              <motion.div variants={fadeUp} custom={0} className="mb-12">
                <span className="inline-block px-4 py-1.5 rounded font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-[0.15em] bg-[#e8833a] text-white mb-5">
                  AI & Automation
                </span>
                <p className="text-[#8a8f9a] text-lg max-w-2xl">
                  Design and deployment of AI-driven systems for marketing, decision-making, and workflow automation. Focused on practical implementation and measurable outcomes.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <motion.div variants={fadeUp} custom={1} className="bg-[#0e1422] border border-[#2d6ca6]/10 rounded-lg p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-[0.2em] text-[#3d8fd4] mb-4">Capabilities</h3>
                  <ul className="space-y-2.5 text-[#c8ccd4]/80 text-[15px]">
                    {["End-to-end AI workflows (data → prediction → action)", "Applied ML (lead scoring, conversion prediction)", "API-based AI services (Flask, model integration)", "Automation (Make, Zapier, n8n, Pipedream)", "Prompt engineering & LLM workflows", "Agentic AI (multi-agent, memory systems)"].map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-[#2d6ca6] mt-0.5 text-xs">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} custom={2} className="bg-[#0e1422] border border-[#e8833a]/8 rounded-lg p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-[0.2em] text-[#e8833a] mb-4">Marketing & Data</h3>
                  <ul className="space-y-2.5 text-[#c8ccd4]/80 text-[15px]">
                    {["AI-driven paid acquisition (Meta, TikTok, YouTube)", "Funnel optimisation & behavioural tracking", "Conversion-focused systems & testing", "Data scoring (conversion readiness, quality)", "SEO automation & content pipelines", "Performance analytics & attribution"].map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-[#e8833a] mt-0.5 text-xs">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} custom={3}>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-[0.2em] text-[#c8ccd4]/60 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Vibe Coding", "Flask", "Node.js", "Redis", "APIs", "Replit", "Make", "Zapier", "n8n", "Pipedream", "ChatGPT", "Claude", "Perplexity", "Mistral", "DeepSeek"].map(tag => (
                    <span key={tag} className="font-[family-name:var(--font-mono)] text-[11px] text-[#3d8fd4]/70 bg-[#2d6ca6]/6 border border-[#2d6ca6]/12 px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Impact */}
        <section className="py-16">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: "98%", label: "Student Pass Rate", color: "#e8833a" },
                { num: "85%", label: "Graduate Employment", color: "#e8833a" },
                { num: "10+", label: "Years Digital Strategy", color: "#d8dce4" },
                { num: "15+", label: "Years Cross-Discipline", color: "#d8dce4" },
              ].map((stat, i) => (
                <motion.div key={stat.num} variants={fadeUp} custom={i} className="text-center p-6 rounded-lg bg-[#0e1422] border border-white/5">
                  <div className="font-[family-name:var(--font-heading)] font-bold text-4xl md:text-5xl tracking-tight" style={{ color: stat.color }}>
                    {stat.num}
                  </div>
                  <div className="text-[#6b7080] text-xs font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-12">
                <LogoHeading silver="EXPERI" orange="ENCE" />
              </motion.div>
              <div className="space-y-4">
                {[
                  { role: "Founder & Digital Strategist", company: "Godspeed Digital Agency", date: "2019 — Present", bullets: ["AI-driven agency — SEO, automation, paid acquisition", "Increased client revenue via AI-powered transformation", "Funnels, e-learning, AI automation at scale"], primary: true },
                  { role: "Director — Skills Development", company: "MyFiladelfia", date: "2010 — Present", bullets: ["QCTO-accredited — counseling & professional dev", "98% pass rate · 85% post-grad employment", "AI-driven mental health support tools"], primary: true },
                  { role: "Director — Healthcare Ops", company: "De Oude Renbaan Sub-Acute Clinic", date: "2012 — 2024", bullets: ["Operational excellence & regulatory compliance", "Digital solutions for admin & patient care"], primary: false },
                  { role: "Franchise Owner · Research Assistant", company: "Curves Wellington · Synexa Life Sciences · The Doctors Lab, London", date: "2002 — 2010", bullets: ["Biomarker research · Digital marketing for holistic wellness"], primary: false },
                ].map((exp, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className={`bg-[#0e1422] rounded-lg p-6 border-l-[3px] ${exp.primary ? 'border-l-[#e8833a]' : 'border-l-[#2d6ca6]/40'} border border-white/[0.03]`}>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#d8dce4] text-base uppercase tracking-[0.05em]">{exp.role}</h3>
                      <span className={`font-[family-name:var(--font-mono)] text-xs font-medium ${exp.primary ? 'text-[#e8833a]' : 'text-[#6b7080]'}`}>{exp.date}</span>
                    </div>
                    <p className="text-[#6b7080] text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-[#c8ccd4]/65 text-[15px] flex items-start gap-2">
                          <span className={exp.primary ? 'text-[#e8833a]' : 'text-[#2d6ca6]/60'}>→</span> {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-12">
                <LogoHeading silver="PORTFOLIO &" orange="GITHUB FORKS" />
                <p className="text-[#6b7080] text-base mt-3 max-w-lg">
                  Websites built, AI systems, automation tools, and curated GitHub forks.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                  <motion.a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    variants={fadeUp}
                    custom={i + 1}
                    className="group bg-[#0e1422] border border-white/[0.03] rounded-lg p-5 hover:border-[#2d6ca6]/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] px-2 py-0.5 rounded border ${categoryStyle[project.category] || "text-[#6b7080] bg-white/5 border-white/10"}`}>
                        {project.category}
                      </span>
                      <ExternalLink size={13} className="text-[#6b7080]/30 group-hover:text-[#e8833a] transition-colors" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#d8dce4] text-sm uppercase tracking-[0.03em] mb-2 group-hover:text-[#e8833a] transition-colors">{project.name}</h3>
                    <p className="text-[#6b7080] text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-[family-name:var(--font-mono)] text-[#3d8fd4]/40 border border-[#2d6ca6]/10 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-12">
                <LogoHeading silver="EDUCA" orange="TION" />
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { degree: "Master of Divinity", school: "SA Theological Seminary", year: "2025 — In Progress", current: true },
                  { degree: "B.Sc. (Hons) Molecular Microbiology", school: "Stellenbosch University", year: "2002", current: false },
                  { degree: "Bachelor of Science", school: "Stellenbosch University", year: "1999 — 2001", current: false },
                  { degree: "Cert. Digital Marketing", school: "Elite Inc.", year: "2019", current: false },
                ].map((edu, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className={`bg-[#0e1422] rounded-lg p-5 border-t-[3px] ${edu.current ? 'border-t-[#e8833a]' : 'border-t-[#2d6ca6]/30'} border border-white/[0.03]`}>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#d8dce4] text-xs uppercase tracking-[0.05em] mb-1">{edu.degree}</h3>
                    <p className="text-[#6b7080] text-xs">{edu.school}</p>
                    <p className={`font-[family-name:var(--font-mono)] text-xs font-medium mt-2 ${edu.current ? 'text-[#e8833a]' : 'text-[#3d8fd4]/60'}`}>{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Popups */}
        <SocialProof />

        {/* Cookie Consent Banner */}
        <CookieConsent />

        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/27767337890" target="_blank" rel="noopener" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/25 hover:scale-110 transition-transform" aria-label="Chat on WhatsApp">
          <MessageCircle size={26} className="text-white" />
        </a>

        {/* Footer */}
        <footer className="py-12 border-t border-[#2d6ca6]/8">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/manus-storage/jm-logo-v2_1d412303.png" alt="Jack Martin" className="h-14 w-auto opacity-60" />
              <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.1em] text-[#6b7080]">
                <span className="text-[#c8ccd4]">Jack</span> <span className="text-[#e8833a]">Martin</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/jackmartin777" target="_blank" rel="noopener" className="text-[#6b7080]/50 hover:text-[#d8dce4] transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/in/jackmartin777" target="_blank" rel="noopener" className="text-[#6b7080]/50 hover:text-[#2d6ca6] transition-colors"><Linkedin size={18} /></a>
              <a href="mailto:jack@jackmartin.co.za" className="text-[#6b7080]/50 hover:text-[#e8833a] transition-colors"><Mail size={18} /></a>
              <a href="https://bold.pro/my/johnhenryjack-martin" target="_blank" rel="noopener" className="text-[#6b7080]/50 hover:text-[#e8833a] transition-colors"><Globe size={18} /></a>
            </div>
            <div className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.2em] text-[#6b7080]/30">
              AI Consultant • Digital Strategist • Human Centred
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
