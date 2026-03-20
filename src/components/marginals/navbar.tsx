"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 z-50 flex items-center justify-between max-w-6xl mx-auto px-6",
        className
      )}
    >
      {/* 🔹 LEFT - LOGO */}
      <div className="text-xl font-bold text-black dark:text-white">
        LOGO
      </div>

      {/* 🔹 CENTER - MENU */}
      <div className="flex justify-center">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home" />
          <MenuItem setActive={setActive} active={active} item="About" />
          <MenuItem setActive={setActive} active={active} item="Services" />
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Menu>
      </div>

      {/* 🔹 RIGHT - LOGIN BUTTON */}
      <button className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium">
        Login
      </button>
    </div>
  );
}

export default Navbar;