"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "motion/react";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  // Inicializamos siempre en false (o un valor seguro) para que servidor y cliente coincidan en el primer render
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Evaluamos el tamaño real solo en el navegador
    if (!isMobile()) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between shadow-lg lg:shadow-none"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="Trayectoria" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="fixed lg:hidden bottom-4 right-4 h-10 w-10 bg-white border border-neutral-200 rounded-full shadow-md flex items-center justify-center z-50 hover:bg-neutral-50 transition"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Sidebar"
      >
        <IconLayoutSidebarRightCollapse className="h-5 w-5 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => isMobile() && setOpen(false)}
            className={twMerge(
              "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
              isActive(link.href) && "bg-white shadow-lg text-primary font-medium"
            )}
          >
            <Icon
              className={twMerge(
                "h-4 w-4 flex-shrink-0",
                isActive(link.href) && "text-sky-500"
              )}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2 font-semibold text-neutral-500">
        Redes Sociales
      </Heading>
      {socials.map((link: Navlink) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2 items-center">
      <Image
        src="/images/Foto4.jpg"
        alt="Nathan Hernandez"
        height={40}
        width={40}
        style={{ height: "auto" }}
        className="object-cover object-top rounded-full flex-shrink-0 h-10 w-10"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Nathan Hernandez</p>
        <p className="font-light text-secondary text-xs">Full Stack Dev</p>
      </div>
    </div>
  );
};