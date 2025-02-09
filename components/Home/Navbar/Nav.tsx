"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { logo } from "@/public";
import { navLinks } from "@/constants/constant";
import Link from "next/link";
import { ArrowUpRightIcon, Bars2Icon } from "@heroicons/react/24/outline";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      if (window.scrollY < 90) setNavbg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navbg ? "bg-white shadow-md border-b-zinc-200" : "fixed"
      } bg-transparent duration-200 h-[12vh] z-[100] fixed w-full px-4 tablet:px-6 desktop:px-8`}
    >
      <div className="flex justify-between items-center h-full mx-auto container">
        {/* Logo */}
        <Image src={logo} alt={"logo"} className="h-20 w-20 object-cover" />
        {/* Navlinks */}
        <div className="hidden items-center space-x-10 tablet:flex">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="text-accent font-medium hover:text-accent transition-all duration-200">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <a
            href="#_"
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-accent text-accent hidden desktop:flex"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-accent top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-accent transition duration-300 group-hover:text-white ease flex items-center gap-2">
              Confirm RSVP
              <ArrowUpRightIcon className="h-4 w-4 text-accent group-hover:text-white" />
            </span>
          </a>
          {/* Hamburger Menu */}
          <Bars2Icon
            onClick={openNav}
            className="w-8 h-8 text-accent cursor-pointer desktop:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
