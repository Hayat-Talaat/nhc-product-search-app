"use client";
import Image from "next/image";
import logo from "@public/logo.png";
import logo2 from "@public/logo2.svg";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white px-6 py-6 mt-12">
      <div className="border-t border-white/20 my-4 " />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 items-center">
          <Image
            src={logo}
            alt="Logo 1"
            priority
            sizes="(min-width: 1024px) 150px, (min-width: 768px) 100px, 100vw"
            className="w-16 h-16 object-cover"
          />
          <Image
            src={logo2}
            alt="Logo 2"
            width={60}
            style={{ height: "auto" }}
          />
        </div>

        <p className="text-xs text-white/70 text-center md:text-right">
          All rights reserved © 2022 - Developed and operated by National
          Housing
        </p>
      </div>
    </footer>
  );
}
