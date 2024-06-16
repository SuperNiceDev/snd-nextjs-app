"use client";

import { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";

const onExitComplete = () => {
  window.scrollTo(0, 0);
};

export default function LayoutClient({ children }: { children: ReactNode }) {
  return children;

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
}
