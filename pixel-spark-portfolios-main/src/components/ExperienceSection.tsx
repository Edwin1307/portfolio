import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Graduate Research Assistant",
    company: "University of Texas at Arlington",
    period: "Jun 2025 – Present",
    tag: "CURRENT",
    tagColor: "bg-terminal-green/15 text-terminal-green border-terminal-green/20",
    bullets: [
      "Researched LLM security and adversarial robustness, evaluating attacks across 120K+ prompts",
      "Designed 8+ experiments, reducing evaluation runtime by 35%",
      "Built automated Python pipelines ensuring 99% reproducibility",
    ],
  },
  {
    role: "Software Engineer",
    company: "Lintechnokrats",
    period: "Nov 2021 – Jul 2023",
    tag: "FULL-TIME",
    tagColor: "bg-terminal-cyan/15 text-terminal-cyan border-terminal-cyan/20",
    bullets: [
      "Developed Python microservices for healthcare systems serving 50K+ users on AWS EC2",
      "Implemented CloudWatch monitoring, improved throughput by 30%",
      "Containerized services with Docker, reduced deployment time by 70%",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Infogain",
    period: "May 2021 – Nov 2021",
    tag: "TRAINEE",
    tagColor: "bg-terminal-amber/15 text-terminal-amber border-terminal-amber/20",
    bullets: [
      "Built backend modules for airline scheduling system managing 10K+ daily assignments",
      "Optimized SQL stored procedures, reducing computation time by 22%",
      "Automated 50+ API tests, lowering post-release defects by 15%",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-terminal-green text-xs mb-8 tracking-widest">
          <span className="text-terminal-dim">$</span> git log --oneline --career
        </p>
      </AnimatedSection>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="terminal-card p-5 md:p-6 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-terminal-green transition-colors">
                      {exp.role}
                    </h3>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${exp.tagColor}`}>
                      {exp.tag}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-terminal-cyan">{exp.company}</p>
                </div>
                <p className="font-mono text-[11px] text-terminal-dim shrink-0">{exp.period}</p>
              </div>

              <div className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <div key={j} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-terminal-green shrink-0 mt-0.5 font-mono text-xs">→</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
