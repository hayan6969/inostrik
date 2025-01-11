"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";
import Link from "next/link";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div>
          <Image
          src={"/ino.png"}
          width={500}
          height={500}
          alt="Ino"
          />
        </div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Striking Innovation through web and design
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Under Construction
        </div>
        <Link
        href={"mailto:hayan@inostrik.com"}>
        <button className="bg-black font-bold dark:bg-white rounded-full w-fit text-white text-xl dark:text-black px-4 py-3">
          Contact Now!
        </button>
        
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
