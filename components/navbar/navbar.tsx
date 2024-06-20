import Logo from "@/public/icons/logo";
import { PersonIcon } from "@radix-ui/react-icons";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between items-center shadow-lg px-6">
      <Link href="/" className="flex gap-2 items-center">
        <CodeXml height={30} width={30} />
        <p className="text-2xl font-semibold tracking-wide">AlgoArena</p>
      </Link>
      <section className="flex gap-2 items-center mr-5">
        <PersonIcon height={22} width={22} />
        <p>sainathr19</p>
      </section>
    </nav>
  );
};

export default Navbar;
