"use client";
import React from "react";

export const MenuItem = ({
  setActive,
  active,
  item,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onClick={() => setActive(item)}
      className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ${
        active === item
          ? "bg-black text-white"
          : "text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
      }`}
    >
      {item}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="flex justify-center space-x-4 px-6 py-3 rounded-full bg-white dark:bg-black shadow-md"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </a>
  );
};