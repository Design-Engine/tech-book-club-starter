import { ArrowDownIcon, LogoMain } from "@/components/icons";
import React from "react";

export const VERSION_INTERVAL = {
  maxPerDoc: 5,
  drafts: {
    autosave: {
      interval: 1000,
    },
  },
};

export const BUTTON_VARIANTS = ["default", "outline"];
export const BUTTON_SIZES = ["default", "sm", "lg", "icon"];

export const logos = {
  default: <LogoMain />,
};

export const buttonIcons = {
  none: null,
  arrow: <ArrowDownIcon />,
};

export const avatars = [
  {
    src: "/images/test-1.png",
    alt: "Avatar 1",
  },
  {
    src: "/images/test-2.png",
    alt: "Avatar 2",
  },
  {
    src: "/images/test-3.png",
    alt: "Avatar 3",
  },
];
