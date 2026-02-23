import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import TypingTerminal from "./TypingTerminal";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 pb-16 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 grid-dots" />
    <div className="absolute inset-0 scanline" />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terminal-green/[0.03] rounded-full blur-[100px]" />

    <div className="relative z-10 max-w-5xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Big name */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-terminal-green text-xs mb-6 tracking-widest">
              // SOFTWARE ENGINEER
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05]">
              Edwin
              <br />
              Joshua
              <br />
              <span className="text-gradient-green terminal-glow">John</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="mailto:edwinjoshuajohn555@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-xs bg-terminal-green/10 text-terminal-green border border-terminal-green/20 hover:bg-terminal-green/20 transition-all duration-200"
            >
              <Mail size={13} /> email
            </a>
            <a
              href="https://github.com/Edwin1307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-xs bg-secondary text-secondary-foreground border border-border hover:border-terminal-green/30 transition-all duration-200"
            >
              <Github size={13} /> github
            </a>
          </motion.div>
        </div>

        {/* Right - Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <TerminalWindow title="~/edwin — bash">
            <TypingTerminal />
          </TerminalWindow>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-terminal-dim"
      >
        <span className="animate-pulse">▼ scroll</span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
