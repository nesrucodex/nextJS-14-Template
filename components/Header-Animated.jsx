"use client";

import { motion } from "framer-motion";

import { twMerge } from "tailwind-merge";

import React from "react";

const HeaderAnimated = ({ title, className }) => {
  const maxX = title.length * 15;
  const maxDuration = title.length * 0.6;
  return (
    <div className="w-screen overflow-x-hidden">
      <motion.h1
        initial={{ x: maxX + "dvw" }}
        animate={{ x: -maxX + "dvw" }}
        transition={{
          duration: maxDuration,
          type: "tween",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.1,
        }}
        className={twMerge(
          "text-nowrap text-[10rem] font-bold uppercase tracking-wider text-black/30 sm:text-[11rem] md:text-[12rem] lg:text-[13rem] xl:text-[14rem]",
          className,
        )}
      >
        {title || "Provide some title"}
      </motion.h1>
    </div>
  );
};

export default HeaderAnimated;
