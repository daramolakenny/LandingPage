"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import Heroe from "@/components/Heroe";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex right-0 flex-col max-h-screen max-w-11/12 items-center">
        <Navbar />  
        <Heroe />
        <Features />
        <Footer />
    </div>
  );
}
