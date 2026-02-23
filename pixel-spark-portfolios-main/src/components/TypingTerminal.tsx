import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Edwin Joshua John" },
  { prompt: true, text: "cat role.txt" },
  { prompt: false, text: "Software Engineer · Cloud · DevOps · LLM Security" },
  { prompt: true, text: "echo $LOCATION" },
  { prompt: false, text: "Arlington, TX" },
  { prompt: true, text: "cat summary.md" },
  { prompt: false, text: "2.5 years building cloud-native systems," },
  { prompt: false, text: "scalable infrastructure & secure backends" },
  { prompt: false, text: "with Python, AWS, Docker & Terraform." },
];

const TypingTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const delay = lines[visibleLines]?.prompt ? 400 : 150;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="font-mono text-sm leading-relaxed space-y-1">
      {lines.slice(0, visibleLines).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
          className="flex gap-2"
        >
          {line.prompt ? (
            <>
              <span className="text-terminal-green shrink-0">❯</span>
              <span className="text-foreground">{line.text}</span>
            </>
          ) : (
            <span className="text-muted-foreground pl-4">{line.text}</span>
          )}
        </motion.div>
      ))}
      {visibleLines < lines.length && (
        <div className="flex gap-2">
          <span className="text-terminal-green">❯</span>
          <span className="cursor-blink text-foreground">▊</span>
        </div>
      )}
      {visibleLines >= lines.length && (
        <div className="flex gap-2">
          <span className="text-terminal-green">❯</span>
          <span className="cursor-blink text-foreground">▊</span>
        </div>
      )}
    </div>
  );
};

export default TypingTerminal;
