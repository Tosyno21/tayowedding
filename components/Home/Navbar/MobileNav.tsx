import { navLinks } from "@/constants/constant";
import Link from "next/link";
import React from "react";
import { ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Navlinks */}
      <div
        className={`${navOpen} flex items-center text-white fixed justify-center flex-col h-full transform transition-all duration-300 delay-300 w-full bg-brand space-y-8 z-[1050] desktop:hidden`}
      >
        {navLinks.map((links) => {
          return (
            <Link href={links.url} key={links.id} className="font-medium">
              <p>{links.label}</p>
            </Link>
          );
        })}
        <a
          href="#_"
          className="rounded-md px-6 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-accent text-white bg-accent"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-accent top-1/2  ease"></span>
          <span className="relative text-white transition duration-300 ease flex items-center gap-2">
            Confirm RSVP
            <ArrowUpRightIcon className="h-4 w-4 text-white" />
          </span>
        </a>
        {/* Close Btn */}
        <div className="text-white bg-white">
          <XMarkIcon
            onClick={closeNav}
            className="text-white absolute top-[30px] right-[20px] cursor-pointer w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
