import AnimatedSection from "./AnimatedSection";
import TerminalWindow from "./TerminalWindow";

const projects = [
  {
    title: "TotemFit",
    tech: ["React", "Bootstrap", "AWS S3", "FastAPI", "Docker", "GitHub Actions"],
    metrics: [
      { label: "Load time", value: "<150ms", color: "text-terminal-green" },
      { label: "Deploy effort", value: "-80%", color: "text-terminal-cyan" },
      { label: "Pipeline", value: "<3min", color: "text-terminal-amber" },
    ],
    lines: [
      "# Responsive React frontend on AWS S3",
      "# Dockerized backend with CI/CD via GitHub Actions",
      "# End-to-end deployment automated on push",
    ],
  },
  {
    title: "Secure PhoneBook API",
    tech: ["Python", "FastAPI", "JWT", "Postman", "Docker"],
    metrics: [
      { label: "Secured", value: "100%", color: "text-terminal-green" },
      { label: "Test cases", value: "40+", color: "text-terminal-cyan" },
      { label: "Dockerized", value: "✓", color: "text-terminal-green" },
    ],
    lines: [
      "# REST API with JWT auth on all endpoints",
      "# Auth validation + negative input testing",
      "# Reproducible builds via Docker",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-terminal-green text-xs mb-8 tracking-widest">
          <span className="text-terminal-dim">$</span> ls ~/projects/
        </p>
      </AnimatedSection>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <TerminalWindow title={`${p.title.toLowerCase().replace(/\s+/g, "-")}/README.md`} className="h-full">
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                
                {/* Metrics row */}
                <div className="flex gap-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-[10px] text-terminal-dim uppercase">{m.label}</p>
                      <p className={`text-sm font-bold font-mono ${m.color}`}>{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Code comments */}
                <div className="space-y-1 pt-2 border-t border-border">
                  {p.lines.map((line, j) => (
                    <p key={j} className="text-xs text-terminal-dim">{line}</p>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary border border-border text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
