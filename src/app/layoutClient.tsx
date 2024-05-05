"use client";

import { ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const onExitComplete = () => {
  window.scrollTo(0, 0);
};

export default function LayoutClient ({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment() || "home";

  return (
    <AnimatePresence mode="wait" initial={true} onExitComplete={onExitComplete}>
      <motion.div
        key={segment}
        className="motion.div"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
          duration: 0.25,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

