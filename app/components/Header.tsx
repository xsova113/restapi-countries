"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="fixed top-0 z-50">
      <nav className="w-screen bg-white flex justify-between items-center transition element_dark_colour border-b dark:border-b-transparent shadow-md container_padding">
        <Link href={"/"} className="font-bold sm:text-lg text-md">
          Where in the world?
        </Link>

        {currentTheme === "dark" ? (
          <button
            className="flex gap-2 items-center"
            onClick={() => setTheme("light")}
          >
            <FaMoon size={15} />
            <span className="max-sm:text-sm">Dark Mode</span>
          </button>
        ) : (
          <button
            className="flex gap-2 items-center"
            onClick={() => setTheme("dark")}
          >
            <FaSun size={15} />
            <span className="max-ms:text-sm">Light Mode</span>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
