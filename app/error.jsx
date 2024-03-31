"use client";
import HeaderAnimated from "@/components/Header-Animated";
import React from "react";

const ErrorBoundary = (props) => {
  return (
    <div>
      <HeaderAnimated className="text-red-400/30" title={"Error Boundary"} />
    </div>
  );
};

export default ErrorBoundary;
