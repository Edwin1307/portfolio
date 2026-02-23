import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    icon: "λ",
    items: ["Python", "Java", "C++", "SQL", "TypeScript", "Bash"],
    color: "text-terminal-green",
    borderColor: "hover:border-terminal-green/30",
  },
  {
    label: "Cloud",
    icon: "☁",
    items: ["AWS EC2", "S3", "RDS", "IAM", "VPC", "CloudWatch", "OCI"],
    color: "text-terminal-cyan",
    borderColor: "hover:border-terminal-cyan/30",
  },
  {
    label: "DevOps",
    icon: "⚙",
    items: ["Docker", "Terraform", "GitHub Actions", "Jenkins", "CI/CD"],
    color: "text-terminal-amber",
    borderColor: "hover:border-terminal-amber/30",
  },
  {
    label: "Databases",
    icon: "◉",
    items: ["PostgreSQL", "MySQL"],
    color: "text-terminal-purple",
    borderColor: "hover:border-terminal-purple/30",
  },
  {
    label: "Concepts",
    icon: "◈",
    items: ["Distributed Systems", "REST APIs", "Linux", "Networking"],
    color: "text-terminal-red",
    borderColor: "hover:border-terminal-red/30",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-terminal-green text-xs mb-8 tracking-widest">
          <span className="text-terminal-dim">$</span> cat skills.yml
        </p>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <AnimatedSection key={group.label} delay={i * 0.08}>
            <div className={`terminal-card p-5 transition-all duration-300 ${group.borderColor}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-lg ${group.color}`}>{group.icon}</span>
                <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.04 }}
                    className="px-3 py-1.5 text-xs font-mono rounded bg-secondary/80 text-foreground border border-border hover:border-muted-foreground/20 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
