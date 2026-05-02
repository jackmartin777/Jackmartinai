import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const }
  })
};

const projects = [
  { name: "Agentic Marketing Optimisation", description: "ML + automation pipeline for real-time campaign decisions and predictive prioritisation.", tech: ["Python", "Flask", "ML", "APIs"], category: "AI & Automation", url: "https://github.com/jackmartin777/software-income-playbooks" },
  { name: "Project N.O.M.A.D", description: "Self-contained, offline survival computer packed with critical tools, knowledge, and AI for off-grid empowerment.", tech: ["TypeScript", "AI", "Offline-First"], category: "AI & Automation", url: "https://github.com/jackmartin777/project-nomad" },
  { name: "Everything Claude Code", description: "Agent harness performance optimization — skills, instincts, memory, security, and research-first development.", tech: ["JavaScript", "AI Agents", "Claude"], category: "AI & Automation", url: "https://github.com/jackmartin777/everything-claude-code" },
  { name: "Oh My ClaudeCode", description: "Teams-first multi-agent orchestration for Claude Code — coordinating AI agents at scale.", tech: ["TypeScript", "Multi-Agent", "Orchestration"], category: "AI & Automation", url: "https://github.com/jackmartin777/oh-my-claudecode" },
  { name: "AI Engineering from Scratch", description: "Learn it. Build it. Ship it — comprehensive AI engineering curriculum and implementation.", tech: ["Python", "ML", "LLMs"], category: "AI & Automation", url: "https://github.com/jackmartin777/ai-engineering-from-scratch" },
  { name: "Awesome LLM Apps", description: "Collection of LLM applications with AI Agents and RAG using OpenAI, Anthropic, Gemini and open-source models.", tech: ["Python", "RAG", "LLMs", "Agents"], category: "AI & Automation", url: "https://github.com/jackmartin777/awesome-llm-apps" },
  { name: "Agency Agents", description: "A complete AI agency — specialized expert agents with personality, processes, and proven deliverables.", tech: ["AI Agents", "Automation", "Agency"], category: "AI & Automation", url: "https://github.com/jackmartin777/agency-agents" },
  { name: "Claude Memory System", description: "Plugin that captures coding sessions, compresses with AI, and injects relevant context into future sessions.", tech: ["TypeScript", "Claude", "Memory"], category: "AI & Automation", url: "https://github.com/jackmartin777/claude-mem" },
  { name: "Dexter Finance", description: "Autonomous agent for deep financial research — AI-driven market analysis and insights.", tech: ["TypeScript", "AI", "Finance"], category: "AI & Automation", url: "https://github.com/jackmartin777/dexterfinance" },
  { name: "MyFiladelfia AI Call Centre", description: "AI Agent-powered call centre for MyFiladelfia — automated student support.", tech: ["AI Agents", "Voice", "Automation"], category: "Education & Ministry", url: "https://github.com/jackmartin777/Myfiladeflia-call-centre-2026" },
  { name: "Journiv App", description: "Bible study journaling app — integrating Scripture engagement with personal reflection.", tech: ["JavaScript", "Mobile", "Ministry"], category: "Education & Ministry", url: "https://github.com/jackmartin777/journiv-app" },
  { name: "Software Income Playbooks", description: "Curated monetization playbooks and API ideas for founders, agencies, and automation builders.", tech: ["JavaScript", "Business", "APIs"], category: "Business & Strategy", url: "https://github.com/jackmartin777/software-income-playbooks" },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0b1224]/80 border-b border-[#e8833a]/10">
          <div className="container flex items-center justify-between py-4">
            <a href="#" className="font-[family-name:var(--font-display)] font-bold text-xl text-white">
              J<span className="text-[#e8833a]">M</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
              <a href="#about" className="hover:text-[#e8833a] transition-colors">About</a>
              <a href="#ai" className="hover:text-[#e8833a] transition-colors">AI & Automation</a>
              <a href="#experience" className="hover:text-[#e8833a] transition-colors">Experience</a>
              <a href="#portfolio" className="hover:text-[#e8833a] transition-colors">Portfolio</a>
              <a href="#education" className="hover:text-[#e8833a] transition-colors">Education</a>
            </div>
            <a href="mailto:jack@jackmartin.co.za" className="text-sm px-4 py-2 rounded-lg bg-[#e8833a] text-white font-semibold hover:bg-[#f5a623] transition-colors shadow-lg shadow-[#e8833a]/20">
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center pt-20">
          <div className="container">
            <motion.div initial="hidden" animate="visible" className="max-w-4xl">
              <motion.p variants={fadeUp} custom={0} className="text-[#e8833a] font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase mb-4">
                Digital Strategist · AI Consultant · Human-Centered Innovator
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
                Jack <span className="text-[#e8833a]">Martin</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
                10+ years leveraging technology to empower individuals, businesses, and communities. Bridging psychology, AI-driven innovation, and digital transformation to create scalable solutions.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 text-sm text-white/50">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#e8833a]" /> Paarl, Western Cape</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-[#e8833a]" /> +27 767 337 890</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-[#e8833a]" /> jack@jackmartin.co.za</span>
                <a href="https://linkedin.com/in/jackmartin777" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-[#e8833a] transition-colors"><Linkedin size={14} className="text-[#e8833a]" /> LinkedIn</a>
                <a href="https://github.com/jackmartin777" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-[#e8833a] transition-colors"><Github size={14} className="text-[#e8833a]" /> GitHub</a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI & Automation Section */}
        <section id="ai" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="mb-12">
                <span className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-[#e8833a] to-[#f5a623] text-white font-[family-name:var(--font-display)] font-bold text-lg shadow-lg shadow-[#e8833a]/30 mb-4">
                  AI & AUTOMATION
                </span>
                <p className="text-white/50 text-lg max-w-2xl">
                  Design and deployment of AI-driven systems for marketing, decision-making, and workflow automation. Focused on practical implementation and measurable outcomes.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div variants={fadeUp} custom={1} className="bg-[#0b1224]/60 border border-[#e8833a]/15 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#e8833a] text-sm uppercase tracking-wider mb-4">Capabilities</h3>
                  <ul className="space-y-2 text-white/75 text-[15px]">
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> End-to-end AI workflows (data → prediction → action)</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Applied ML (lead scoring, conversion prediction)</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> API-based AI services (Flask, model integration)</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Automation (Make, Zapier, n8n, Pipedream)</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Prompt engineering & LLM workflows</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Agentic AI (multi-agent, memory systems)</li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} custom={2} className="bg-[#0b1224]/60 border border-[#e8833a]/15 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#e8833a] text-sm uppercase tracking-wider mb-4">Marketing & Data</h3>
                  <ul className="space-y-2 text-white/75 text-[15px]">
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> AI-driven paid acquisition (Meta, TikTok, YouTube)</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Funnel optimisation & behavioural tracking</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Conversion-focused systems & testing</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Data scoring (conversion readiness, quality)</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> SEO automation & content pipelines</li>
                    <li className="flex items-start gap-2"><span className="text-[#e8833a] mt-1">⚡</span> Performance analytics & attribution</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} custom={3}>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[#e8833a] text-sm uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Vibe Coding", "Flask", "Node.js", "Redis", "APIs", "Replit", "Make", "Zapier", "n8n", "Pipedream", "ChatGPT", "Claude", "Perplexity", "Mistral", "DeepSeek"].map(tag => (
                    <span key={tag} className="font-[family-name:var(--font-mono)] text-xs text-[#e8833a] bg-[#e8833a]/8 border border-[#e8833a]/20 px-3 py-1.5 rounded-md">
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
                { num: "98%", label: "Student Pass Rate" },
                { num: "85%", label: "Graduate Employment" },
                { num: "10+", label: "Years Digital Strategy" },
                { num: "15+", label: "Years Cross-Discipline" },
              ].map((stat, i) => (
                <motion.div key={stat.num} variants={fadeUp} custom={i} className="text-center p-6 rounded-xl bg-[#0b1224]/40 border border-[#e8833a]/10 shadow-lg">
                  <div className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#e8833a] drop-shadow-[0_2px_8px_rgba(232,131,58,0.3)]">
                    {stat.num}
                  </div>
                  <div className="text-white/40 text-sm mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-[#e8833a] uppercase tracking-wide mb-12 drop-shadow-[0_2px_8px_rgba(232,131,58,0.3)]">
                Experience
              </motion.h2>
              <div className="space-y-6">
                {[
                  { role: "Founder & Digital Strategist", company: "Godspeed Digital Agency", date: "2019 — Present", bullets: ["AI-driven agency — SEO, automation, paid acquisition", "Increased client revenue via AI-powered transformation", "Funnels, e-learning, AI automation at scale"] },
                  { role: "Director — Skills Development", company: "MyFiladelfia", date: "2010 — Present", bullets: ["QCTO-accredited — counseling & professional dev", "98% pass rate · 85% post-grad employment", "AI-driven mental health support tools"] },
                  { role: "Director — Healthcare Ops", company: "De Oude Renbaan Sub-Acute Clinic", date: "2012 — 2024", bullets: ["Operational excellence & regulatory compliance", "Digital solutions for admin & patient care"] },
                  { role: "Franchise Owner · Research Assistant", company: "Curves Wellington · Synexa Life Sciences · The Doctors Lab, London", date: "2002 — 2010", bullets: ["Biomarker research · Digital marketing for holistic wellness"] },
                ].map((exp, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className="bg-[#0b1224]/40 border border-white/5 rounded-xl p-6 border-l-4 border-l-[#e8833a] hover:border-l-[#f5a623] transition-colors shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                      <span className="text-[#e8833a] font-bold text-sm">{exp.date}</span>
                    </div>
                    <p className="text-white/40 text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-white/65 text-[15px] flex items-start gap-2">
                          <span className="text-[#e8833a]">→</span> {b}
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
              <motion.h2 variants={fadeUp} custom={0} className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-[#e8833a] uppercase tracking-wide mb-4 drop-shadow-[0_2px_8px_rgba(232,131,58,0.3)]">
                Portfolio
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-white/40 text-lg mb-12 max-w-xl">
                Selected projects from GitHub — AI agents, automation systems, and digital tools.
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
                    className="group bg-[#0b1224]/50 border border-white/5 rounded-xl p-5 hover:border-[#e8833a]/30 hover:shadow-xl hover:shadow-[#e8833a]/5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[#e8833a]/60 bg-[#e8833a]/8 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      <ExternalLink size={14} className="text-white/20 group-hover:text-[#e8833a] transition-colors" />
                    </div>
                    <h3 className="font-bold text-white text-[15px] mb-2 group-hover:text-[#e8833a] transition-colors">{project.name}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-[family-name:var(--font-mono)] text-white/30 border border-white/10 px-2 py-0.5 rounded">
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
              <motion.h2 variants={fadeUp} custom={0} className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-[#e8833a] uppercase tracking-wide mb-12 drop-shadow-[0_2px_8px_rgba(232,131,58,0.3)]">
                Education
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { degree: "Master of Divinity", school: "SA Theological Seminary", year: "2025 — In Progress", current: true },
                  { degree: "B.Sc. (Hons) Molecular Microbiology", school: "Stellenbosch University", year: "2002", current: false },
                  { degree: "Bachelor of Science", school: "Stellenbosch University", year: "1999 — 2001", current: false },
                  { degree: "Cert. Digital Marketing", school: "Elite Inc.", year: "2019", current: false },
                ].map((edu, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 1} className={`bg-[#0b1224]/40 rounded-xl p-5 border-t-4 ${edu.current ? 'border-t-[#e8833a]' : 'border-t-white/10'} shadow-lg`}>
                    <h3 className="font-bold text-white text-sm mb-1">{edu.degree}</h3>
                    <p className="text-white/35 text-xs">{edu.school}</p>
                    <p className="text-[#e8833a] font-bold text-xs mt-2">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/30 text-sm">
              Jack Martin · <span className="text-[#e8833a]">Digital Strategist & AI Consultant</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/jackmartin777" target="_blank" rel="noopener" className="text-white/30 hover:text-[#e8833a] transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/in/jackmartin777" target="_blank" rel="noopener" className="text-white/30 hover:text-[#e8833a] transition-colors"><Linkedin size={18} /></a>
              <a href="mailto:jack@jackmartin.co.za" className="text-white/30 hover:text-[#e8833a] transition-colors"><Mail size={18} /></a>
              <a href="https://bold.pro/my/johnhenryjack-martin" target="_blank" rel="noopener" className="text-white/30 hover:text-[#e8833a] transition-colors"><Globe size={18} /></a>
            </div>
            <div className="text-white/20 text-xs font-[family-name:var(--font-mono)]">
              Science × AI × Psychology × Ministry × Business
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
