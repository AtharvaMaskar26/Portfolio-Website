import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gamehub from "@/public/gamehub.png"
import cryptocharity from "@/public/cryptocharity.png"
import epicCaptions from "@/public/epicCaptions.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Entrepreneurship & Professional Development Director",
    location: "RCTSEC",
    description:
      "Conducted a podcast with Mr. Jaan Altosaar (Professor Of Research, Columbia University) on how Healthcare Infrastructure in India needs to rely on Artificial Intelligence & Machine Learning ",
    icon: React.createElement(LuGraduationCap),
    date: "June 2021 - June 2023",
  },
  {
    title: "Junior Committee Member",
    location: "CodeCell",
    description:
      "Helped conduct a college level hackathon with over 1000+ Participants and got sponsors worth Rs. 60,000",
    icon: React.createElement(CgWorkAlt),
    date: "August 2021 - June 2022",
  },
  {
    title: "Front-End Developer Intern",
    location: "Choice Techlab",
    description:
      "Designed an internal dashboard to manage their E-Commerce website with 5000+ monthly customers, predominantly utilizing ReactJS and Redux Toolkit.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "GameHub",
    description:
      "GameHub is a high-performance live streaming platform akin to Twitch. With GameHub, stream moderators have the control to ban or block users from their channel.",
    tags: ["NextJS", "TypeScript", "LiveKit", "Prisma", "Clerk"],
    imageUrl: gamehub,
  },
  {
    title: "Epic Captions",
    description:
      " A caption generator website that helps you generate captions for your video within minutes wihthout any hassle.",
    tags: ["NextJS", "JavaScript", "Tailwind", "AWS Transcribe"],
    imageUrl: epicCaptions,
  },
  {
    title: "Crypto Charity",
    description:
      "A Decentralized Crowd Funding Platform that allows users to create campaigns and raise funds without having to rely upon shady middlemen.",
    tags: ["Solidity", "Hardhat", "EthersJS", "ReactJS"],
    imageUrl: cryptocharity,
  },
] as const;

export const skillsData = [
  "Solidity", 
  "TypeScript", 
  "JavaScript", 
  "Python", 
  "NextJS", 
  "ReactJS", 
  "EthersJS", 
  "Web3JS", 
  "Hardhat", 
  "Prisma", 
  "LiveKit", 
  "AWS", 
  "Convex", 
  "SuperFluid", 
  "Pinata", 
  "Tailwind", 
  "Shadcn"
] as const;
