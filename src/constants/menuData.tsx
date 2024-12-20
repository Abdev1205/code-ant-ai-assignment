import React from "react";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { AiOutlineCloud } from "react-icons/ai";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";

export interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "Repositories",
    icon: <HiOutlineHome />,
    path: "/",
  },
  {
    label: "AI Code Review",
    icon: <HiMiniCodeBracket />,
    path: "/under-construction/ai-code-review",
  },
  {
    label: "Cloud Security",
    icon: <AiOutlineCloud />,
    path: "/under-construction/cloud-security",
  },
  {
    label: "How to Use",
    icon: <LuBookText />,
    path: "/under-construction/how-to-use",
  },
  {
    label: "Settings",
    icon: <IoSettingsOutline />,
    path: "/under-construction/settings",
  },
];
