import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-mono text-terminal-green font-bold text-sm tracking-tight">
          <Terminal size={16} />
          <span>ejj<span className="cursor-blink">_</span></span>
        </a>

        <ul className="hidden md:flex gap-6">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs text-muted-foreground hover:text-terminal-green transition-colors duration-200"
              >
                <span className="text-terminal-dim">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden px-6 pb-4 space-y-3 border-t border-border"
        >
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-xs text-muted-foreground hover:text-terminal-green transition-colors pt-2"
              >
                <span className="text-terminal-dim">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
