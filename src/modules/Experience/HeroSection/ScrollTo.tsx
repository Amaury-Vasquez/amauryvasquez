"use client";
import { ArrowDown } from "lucide-react";
import { TIMELINE_SECTION_ID } from "../../../data/sectionIds";

const ScrollTo = () => (
  <button
    className="p-2 hover:bg-base-200 transition-colors rounded-full"
    onClick={() =>
      window?.scrollTo({
        top: document.getElementById(TIMELINE_SECTION_ID)?.offsetTop || 0,
        behavior: "smooth",
      })
    }
  >
    <ArrowDown size="40" className="text-accent animate-bounce" />
  </button>
);

export default ScrollTo;
