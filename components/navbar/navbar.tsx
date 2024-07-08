"use client";

import { PersonIcon } from "@radix-ui/react-icons";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useAuth } from "../../context/authContext";
import { useRouter } from "next/navigation";
import { CardTitle } from "../ui/card";

const Navbar = () => {
  const { isLoggedin, setLoggedin } = useAuth();
  const router = useRouter();
  return (
    <nav className="h-16 flex justify-between items-center shadow-lg px-6">
      <Link href="/" className="flex gap-2 items-center">
        <CodeXml className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]" />
        <CardTitle className="text-xl md:text-2xl font-semibold tracking-wide">
          AlgoArena
        </CardTitle>
      </Link>
      <section className="mr-5">
        {isLoggedin ? (
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <PersonIcon height={22} width={22} />
              <p>{localStorage.getItem("username")}</p>
            </div>
            <Button
              variant="outline"
              className="border-none outline-none"
              onClick={() => {
                localStorage.removeItem("username");
                localStorage.removeItem("token");
                setLoggedin(false);
                router.replace("/auth/signin");
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="outline">
            <Link href="/auth/signin">Sign in</Link>
          </Button>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
