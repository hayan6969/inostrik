"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";

export function HoverBorderGradientDemo() {
  return (
    <Link 
    href={"mailto:hayan@inostrik.com"}>
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span>Contact now!</span>
      </HoverBorderGradient>
    </div>
    </Link>
  );
}

