import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";

const navContent = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const Navbar = () => {
  const NavItems = () => (
    <>
      {navContent.map((item) => (
        <Button variant="link" key={item.label} asChild>
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
      <Button variant="link" asChild>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </>
  );

  return (
    <header className="top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div>
          <h1 className="text-lg font-bold">musique</h1>
        </div>
        <nav className="hidden md:flex md:items-center md:space-x-4">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
