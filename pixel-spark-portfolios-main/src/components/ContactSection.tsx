import AnimatedSection from "./AnimatedSection";
import TerminalWindow from "./TerminalWindow";
import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "edwinjoshuajohn555@gmail.com",
    href: "mailto:edwinjoshuajohn555@gmail.com",
    color: "text-terminal-green",
  },
  {
    icon: Github,
    label: "github.com/Edwin1307",
    href: "https://github.com/Edwin1307",
    color: "text-terminal-amber",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/edwinjoshuajohn",
    href: "https://linkedin.com/in/edwinjoshuajohn",
    color: "text-terminal-purple",
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-terminal-green text-xs mb-8 tracking-widest">
          <span className="text-terminal-dim">$</span> cat contact.sh
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <TerminalWindow title="contact.sh">
          <div className="space-y-1 mb-6">
            <p className="text-terminal-dim"># Open to opportunities in</p>
            <p className="text-terminal-dim"># Software Engineering, Cloud Infrastructure & DevOps</p>
            <p className="text-terminal-dim"># Let's build something great together.</p>
          </div>

          <div className="space-y-3">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 group"
              >
                <span className="text-terminal-green">❯</span>
                <c.icon size={14} className={`${c.color} shrink-0`} />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm underline-offset-4 group-hover:underline">
                  {c.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-terminal-green text-xs">
              ❯ echo "Thanks for visiting!" <span className="cursor-blink">▊</span>
            </p>
          </div>
        </TerminalWindow>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
