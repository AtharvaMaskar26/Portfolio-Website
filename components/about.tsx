"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p>
        Hello! I am an aspiring <span className="font-bold">Software Engineer</span> and a junior at Mumbai University, pursuing <span className="font-bold">B.E. in Information Technology</span>. I possess experience in <span className="font-bold">Front-End Development, Blockchain Development, and Technical Writing</span>. Over the past few months, I have been writing content for various organizations focusing on Blockchain Development. My core tech stack includes <span className="font-bold">NextJS, ReactJS, TypeScript, Solidity, and EthersJS</span>. Currently, I am actively seeking an internship in <span className="font-bold">Front-End Development</span>.
        </p>
    </motion.section>
  );
}
