"use client";

import type React from "react";
import { motion } from "framer-motion";
import { fadeUp, luxeTransition } from "@/components/animations/variants";

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={luxeTransition}
    >
      {children}
    </motion.div>
  );
}
