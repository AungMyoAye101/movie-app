"use client";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Darkmodeswitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <CiLight
            onClick={() => {
              setTheme("light");
            }}
            className="text-lg cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => {
              setTheme("dark");
            }}
            className="text-lg cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
}
