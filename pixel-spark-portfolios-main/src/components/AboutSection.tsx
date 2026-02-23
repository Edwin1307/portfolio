import AnimatedSection from "./AnimatedSection";
import TerminalWindow from "./TerminalWindow";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-terminal-green text-xs mb-8 tracking-widest">
          <span className="text-terminal-dim">$</span> cat about.md
        </p>
      </AnimatedSection>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main about - spans 2 cols */}
        <AnimatedSection className="md:col-span-2" delay={0.1}>
          <TerminalWindow title="about.md" className="h-full">
            <p className="text-foreground leading-relaxed">
              Software Engineer with <span className="text-terminal-green">2.5 years</span> of experience in 
              Python automation, AWS services, Docker, CI/CD pipelines, and infrastructure deployment.
            </p>
            <br />
            <p className="text-muted-foreground leading-relaxed">
              Strong background in backend engineering and cloud monitoring, with recent experience 
              researching <span className="text-terminal-cyan">LLM security</span> and Python-based 
              evaluation tools. Skilled in building cloud-native systems, optimizing deployments, and 
              implementing secure, scalable infrastructure.
            </p>
          </TerminalWindow>
        </AnimatedSection>

        {/* Stats card */}
        <AnimatedSection delay={0.2}>
          <TerminalWindow title="stats.json" className="h-full">
            <div className="space-y-3">
              {[
                { key: "experience", val: "2.5 yrs", color: "text-terminal-green" },
                { key: "users_served", val: "50K+", color: "text-terminal-cyan" },
                { key: "prompts_eval", val: "120K+", color: "text-terminal-amber" },
                { key: "deploy_speed", val: "-70%", color: "text-terminal-red" },
                { key: "throughput", val: "+30%", color: "text-terminal-green" },
              ].map((s) => (
                <div key={s.key} className="flex justify-between">
                  <span className="text-terminal-purple">"{s.key}"</span>
                  <span className={s.color}>{s.val}</span>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </AnimatedSection>

        {/* Education cards */}
        <AnimatedSection delay={0.25}>
          <TerminalWindow title="edu_ms.txt" className="h-full">
            <p className="text-terminal-green text-xs">M.S. Computer Science</p>
            <p className="text-foreground text-xs mt-1">UT Arlington</p>
            <p className="text-muted-foreground text-xs mt-1">GPA: 3.5/4.0</p>
            <p className="text-terminal-dim text-xs mt-1">Aug 2023 – May 2025</p>
          </TerminalWindow>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <TerminalWindow title="edu_btech.txt" className="h-full">
            <p className="text-terminal-cyan text-xs">B.Tech Info Science</p>
            <p className="text-foreground text-xs mt-1">New Horizon College</p>
            <p className="text-muted-foreground text-xs mt-1">CGPA: 8.33/10</p>
            <p className="text-terminal-dim text-xs mt-1">Aug 2017 – May 2021</p>
          </TerminalWindow>
        </AnimatedSection>

        {/* Ascii art card */}
        <AnimatedSection delay={0.35}>
          <div className="terminal-card h-full flex items-center justify-center p-6 transition-all duration-300">
            <pre className="text-terminal-green/60 text-[8px] leading-[10px] select-none flicker">
{`    ┌─────────────┐
    │  ╔═══════╗  │
    │  ║ CLOUD ║  │
    │  ║ NATIVE║  │
    │  ╚═══════╝  │
    │  ┌──┐ ┌──┐  │
    │  │▓▓│ │▓▓│  │
    │  └──┘ └──┘  │
    └─────────────┘`}
            </pre>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
