import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Globe, Download, MessageCircle } from "lucide-react";

/*
 * DESIGN SYSTEM — matched to JM logo palette:
 * Navy bg:       #0c1525 / #111d33
 * Silver text:   #c0c4cc (body) / #e8eaef (headings)
 * Burnt orange:  #e8833a (primary accent — the M arrow)
 * Circuit blue:  #4da6e8 (secondary accent — the J's neural nodes)
 * Chrome:        #b8bcc5 (subtle metallic feel)
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
  { name: "Kunsmatige Intelligensie", description: "AI education platform built with StackBlitz — making AI accessible in Afrikaans.", tech: ["TypeScript", "StackBlitz", "Education"], category: "Website Built", url: "https://github.com/jackmartin777/kunsmatigeintelligensie" },
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

// Category badge colours — circuit blue for tech, orange for business
const categoryColor: Record<string, string> = {
  "Website Built": "text-[#4da6e8] bg-[#4da6e8]/8 border-[#4da6e8]/20",
  "AI & Automation": "text-[#e8833a] bg-[#e8833a]/8 border-[#e8833a]/20",
  "GitHub Fork": "text-[#b8bcc5] bg-[#b8bcc5]/8 border-[#b8bcc5]/15",
  "Education & Ministry": "text-[#4da6e8] bg-[#4da6e8]/8 border-[#4da6e8]/20",
  "Business & Strategy": "text-[#e8833a] bg-[#e8833a]/8 border-[#e8833a]/20",
};

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0c1525]">
      {/* Background watermark */}
      <div
        className="fixed inset-0 z-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `url('/manus-storage/brain-heart-bg_58cce87d.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10">
        {/* Navigation — logo bigger */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0c1525]/85 border-b border-[#4da6e8]/8">
          <div className="container flex items-center justify-between py-3">
            <a href="#" className="flex items-center">
              <img src="/manus-storage/jm-logo_e1ab2810.png" alt="Jack Martin" className="h-14 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#b8bcc5]/70">
              <a href="#about" className="hover:text-[#e8833a] transition-colors">About</a>
              <a href="#ai" className="hover:text-[#4da6e8] transition-colors">AI & Automation</a>
              <a href="#experience" className="hover:text-[#e8833a] transition-colors">Experience</a>
              <a href="#portfolio" className="hover:text-[#4da6e8] transition-colors">Portfolio & Forks</a>
              <a href="#education" className="hover:text-[#e8833a] transition-colors">Education</a>
            </div>
            <a href="mailto:jack@jackmartin.co.za" className="text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#e8833a] to-[#f0993f] text-white font-semibold hover:from-[#f0993f] hover:to-[#e8833a] transition-all shadow-lg shadow-[#e8833a]/20">
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center pt-24">
          <div className="container">
            <motion.div initial="hidden" animate="visible" className="max-w-4xl">
              <motion.p variants={fadeUp} custom={0} className="font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase mb-4">
                <span className="text-[#b8bcc5]">AI Consultant</span>
                <span className="text-[#4da6e8] mx-2">·</span>
                <span className="text-[#e8833a]">Digital Strategist</span>
                <span className="text-[#4da6e8] mx-2">·</span>
                <span className="text-[#b8bcc5]">Human Centred</span>
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
                <span className="text-[#e8eaef]">Jack </span>
                <span className="text-[#e8833a]">Martin</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-[#b8bcc5]/65 max-w-2xl leading-relaxed mb-8">
                10+ years leveraging technology to empower individuals, businesses, and communities. Bridging psychology, AI-driven innovation, and digital transformation to create scalable solutions.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3 mb-10">
                <a href="/manus-storage/Jack_Martin_CV_Final_e1fbbd18.pdf" download="Jack_Martin_CV.pdf" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#e8833a] to-[#f0993f] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#e8833a]/30 transition-all">
                  <Download size={16} /> Download CV
                </a>
                <a href="/manus-storage/Jack_Martin_CV_Monochrome_70d3e2e7.pdf" download="Jack_Martin_CV_Monochrome.pdf" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b8bcc5]/10 text-[#b8bcc5] font-semibold text-sm hover:bg-[#b8bcc5]/20 transition-colors border border-[#b8bcc5]/20">
                  <Download size={16} /> Monochrome CV
                </a>
              </motion.div>
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4 text-sm text-[#b8bcc5]/50">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#4da6e8]" /> Paarl, Western Cape</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-[#4da6e8]" /> +27 767 337 890</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-[#e8833a]" /> jack@jackmartin.co.za</span>
                <a href="https://linkedin.com/in/jackmartin777" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-[#4da6e8] transition-colors"><Linkedin size={14} className="text-[#4da6e8]" /> LinkedIn</a>
                <a href="https://github.com/jackmartin777" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-[#b8bcc5] transition-colors"><Github size={14} className="text-[#b8bcc5]" /> GitHub</a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI & Automation Section */}
        <section id="ai" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-12">
                <span className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-[#e8833a] to-[#f0993f] text-white font-[family-name:var(--font-display)] font-bold text-lg shadow-lg shadow-[#e8833a]/25 mb-4">
                  AI & AUTOMATION
                </span>
                <p className="text-[#b8bcc5]/55 text-lg max-w-2xl">
                  Design and deployment of AI-driven systems for marketing, decision-making, and workflow automation. Focused on practical implementation and measurable outcomes.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div variants={fadeUp} custom={1} className="bg-[#0c1525]/70 border border-[#4da6e8]/12 rounded-xl p-6 backdrop-blur-sm shadow-lg shadow-[#4da6e8]/5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#4da6e8] text-sm uppercase tracking-wider mb-4">Capabilities</h3>
                  <ul className="space-y-2.5 text-[#c0c4cc] text-[15px]">
                    {["End-to-end AI workflows (data → prediction → action)", "Applied ML (lead scoring, conversion prediction)", "API-based AI services (Flask, model integration)", "Automation (Make, Zapier, n8n, Pipedream)", "Prompt engineering & LLM workflows", "Agentic AI (multi-agent, memory systems)"].map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-[#4da6e8] mt-0.5 text-xs">⚡</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} custom={2} className="bg-[#0c1525]/70 border border-[#e8833a]/12 rounded-xl p-6 backdrop-blur-sm shadow-lg shadow-[#e8833a]/5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#e8833a] text-sm uppercase tracking-wider mb-4">Marketing & Data</h3>
                  <ul className="space-y-2.5 text-[#c0c4cc] text-[15px]">
                    {["AI-driven paid acquisition (Meta, TikTok, YouTube)", "Funnel optimisation & behavioural tracking", "Conversion-focused systems & testing", "Data scoring (conversion readiness, quality)", "SEO automation & content pipelines", "Performance analytics & attribution"].map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-[#e8833a] mt-0.5 text-xs">⚡</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} custom={3}>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[#b8bcc5] text-sm uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Vibe Coding", "Flask", "Node.js", "Redis", "APIs", "Replit", "Make", "Zapier", "n8n", "Pipedream", "ChatGPT", "Claude", "Perplexity", "Mistral", "DeepSeek"].map(tag => (
                    <span key={tag} className="font-[family-name:var(--font-mono)] text-xs text-[#4da6e8] bg-[#4da6e8]/6 border border-[#4da6e8]/15 px-3 py-1.5 rounded-md shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Impact Stats */}
        <section className="py-16">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: "98%", label: "Student Pass Rate", color: "#e8833a" },
                { num: "85%", label: "Graduate Employment", color: "#e8833a" },
                { num: "10+", label: "Years Digital Strategy", color: "#4da6e8" },
                { num: "15+", label: "Years Cross-Discipline", color: "#4da6e8" },
              ].map((stat, i) => (
                <motion.div key={stat.num} variants={fadeUp} custom={i} className="text-center p-6 rounded-xl bg-[#111d33]/60 border border-white/5 shadow-lg">
                  <div className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl" style={{ color: stat.color, textShadow: `0 2px 12px ${stat.color}33` }}>
                    {stat.num}
                  </div>
                  <div className="text-[#b8bcc5]/40 text-sm mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl uppercase tracking-wide mb-12" style={{ color: '#e8eaef', textShadow: '0 2px 8px rgba(77,166,232,0.2)' }}>
                Experi<span className="text-[#e8833a]">ence</span>
              </motion.h2>
              <div className="space-y-6">
                {[
                  { role: "Founder & Digital Strategist", company: "Godspeed Digital Agency", date: "2019 — Present", bullets: ["AI-driven agency — SEO, automation, paid acquisition", "Increased client revenue via AI-powered transformation", "Funnels, e-learning, AI automation at scale"], accent: "#e8833a" },
                  { role: "Director — Skills Development", company: "MyFiladelfia", date: "2010 — Present", bullets: ["QCTO-accredited — counseling & professional dev", "98% pass rate · 85% post-grad employment", "AI-driven mental health support tools"], accent: "#4da6e8" },
                  { role: "Director — Healthcare Ops", company: "De Oude Renbaan Sub-Acute Clinic", date: "2012 — 2024", bullets: ["Operational excellence & regulatory compliance", "Digital solutions for admin & patient care"], accent: "#b8bcc5" },
                  { role: "Franchise Owner · Research Assistant", company: "Curves Wellington · Synexa Life Sciences · The Doctors Lab, London", date: "2002 — 2010", bullets: ["Biomarker research · Digital marketing for holistic wellness"], accent: "#b8bcc5" },
                ].map((exp, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className="bg-[#111d33]/50 border border-white/5 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl" style={{ borderLeftWidth: '4px', borderLeftColor: exp.accent }}>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className="font-bold text-[#e8eaef] text-lg">{exp.role}</h3>
                      <span className="font-bold text-sm" style={{ color: exp.accent }}>{exp.date}</span>
                    </div>
                    <p className="text-[#b8bcc5]/40 text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-[#c0c4cc]/70 text-[15px] flex items-start gap-2">
                          <span style={{ color: exp.accent }}>→</span> {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl uppercase tracking-wide mb-4" style={{ color: '#e8eaef', textShadow: '0 2px 8px rgba(232,131,58,0.2)' }}>
                Portfolio & GitHub <span className="text-[#4da6e8]">Forks</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-[#b8bcc5]/45 text-lg mb-12 max-w-xl">
                Websites built, AI systems, automation tools, and curated GitHub forks.
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((project, i) => (
                  <motion.a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    variants={fadeUp}
                    custom={i + 2}
                    className="group bg-[#111d33]/50 border border-white/5 rounded-xl p-5 hover:border-[#4da6e8]/25 hover:shadow-xl hover:shadow-[#4da6e8]/5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2 py-0.5 rounded border ${categoryColor[project.category] || "text-[#b8bcc5] bg-white/5 border-white/10"}`}>
                        {project.category}
                      </span>
                      <ExternalLink size={14} className="text-[#b8bcc5]/20 group-hover:text-[#4da6e8] transition-colors" />
                    </div>
                    <h3 className="font-bold text-[#e8eaef] text-[15px] mb-2 group-hover:text-[#e8833a] transition-colors">{project.name}</h3>
                    <p className="text-[#b8bcc5]/40 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-[family-name:var(--font-mono)] text-[#4da6e8]/50 border border-[#4da6e8]/10 px-2 py-0.5 rounded">
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

        {/* Education Section */}
        <section id="education" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl uppercase tracking-wide mb-12" style={{ color: '#e8eaef', textShadow: '0 2px 8px rgba(77,166,232,0.2)' }}>
                Educa<span className="text-[#4da6e8]">tion</span>
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { degree: "Master of Divinity", school: "SA Theological Seminary", year: "2025 — In Progress", current: true },
                  { degree: "B.Sc. (Hons) Molecular Microbiology", school: "Stellenbosch University", year: "2002", current: false },
                  { degree: "Bachelor of Science", school: "Stellenbosch University", year: "1999 — 2001", current: false },
                  { degree: "Cert. Digital Marketing", school: "Elite Inc.", year: "2019", current: false },
                ].map((edu, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className={`bg-[#111d33]/50 rounded-xl p-5 border-t-4 shadow-lg ${edu.current ? 'border-t-[#e8833a]' : 'border-t-[#4da6e8]/30'}`}>
                    <h3 className="font-bold text-[#e8eaef] text-sm mb-1">{edu.degree}</h3>
                    <p className="text-[#b8bcc5]/35 text-xs">{edu.school}</p>
                    <p className={`font-bold text-xs mt-2 ${edu.current ? 'text-[#e8833a]' : 'text-[#4da6e8]'}`}>{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/27767337890"
          target="_blank"
          rel="noopener"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} className="text-white" />
        </a>

        {/* Footer */}
        <footer className="py-12 border-t border-[#4da6e8]/8">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[#b8bcc5]/30 text-sm">
              <img src="/manus-storage/jm-logo_e1ab2810.png" alt="Jack Martin" className="h-10 w-auto opacity-60" />
              <span>Jack Martin · <span className="text-[#e8833a]">Digital Strategist</span> & <span className="text-[#4da6e8]">AI Consultant</span></span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/jackmartin777" target="_blank" rel="noopener" className="text-[#b8bcc5]/30 hover:text-[#4da6e8] transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/in/jackmartin777" target="_blank" rel="noopener" className="text-[#b8bcc5]/30 hover:text-[#4da6e8] transition-colors"><Linkedin size={18} /></a>
              <a href="mailto:jack@jackmartin.co.za" className="text-[#b8bcc5]/30 hover:text-[#e8833a] transition-colors"><Mail size={18} /></a>
              <a href="https://bold.pro/my/johnhenryjack-martin" target="_blank" rel="noopener" className="text-[#b8bcc5]/30 hover:text-[#e8833a] transition-colors"><Globe size={18} /></a>
            </div>
            <div className="text-[#b8bcc5]/20 text-xs font-[family-name:var(--font-mono)]">
              <span className="text-[#b8bcc5]/30">Science</span> × <span className="text-[#4da6e8]/40">AI</span> × <span className="text-[#b8bcc5]/30">Psychology</span> × <span className="text-[#e8833a]/40">Ministry</span> × <span className="text-[#b8bcc5]/30">Business</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
