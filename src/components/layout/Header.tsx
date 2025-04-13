"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@public/logo.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-100 shadow-sm py-4 px-6 flex items-center gap-11">
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt="NHC Logo"
          priority
          sizes="(min-width: 1024px) 150px, (min-width: 768px) 100px, 100vw"
          className="w-16 h-16 object-cover"
        />
      </div>
      <Link
        href="/products"
        className={pathname === "/products" ? "text-primary" : ""}
      >
        Products
      </Link>
      <Link
        href="/about"
        className={pathname === "/about" ? "text-primary" : ""}
      >
        About
      </Link>
    </header>
  );
}
