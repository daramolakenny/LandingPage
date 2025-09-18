"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


export default function ThemeToggle() {
    const {theme, setTheme, resolvedTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    })

    if (!mounted) return null 

    const currentTheme = resolvedTheme || "light";

    return (
        <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full relative" 
            onClick={() => setTheme(
            currentTheme === "light" ? "dark" : "light" )}
        >
            {currentTheme === "light" ? (
                <FaSun className="h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"></FaSun>
            ) : (
                <FaMoon className="h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
            )}
        </Button>
    )
}

