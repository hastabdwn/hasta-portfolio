"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button className="bg-buttons text-textPrimary rounded flex items-center cursor-pointer"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
    );
}