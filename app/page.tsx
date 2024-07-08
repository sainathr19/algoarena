import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-112px)] bg-gradient-to-r from-primary to-primarysm:to-primary-foreground">
      <h1 className="text-center text-6xl sm:text-5xl font-bold text-white">
        Welcome to Algoarena
      </h1>
      <p className="text-base sm:text-xl text-white mt-4 sm:text-center">
        Coding competitions to challenge your skills
      </p>
      <div className="mt-8 flex gap-5 sm:justify-center">
        <Link href="/contests">
          <Button variant="secondary">Explore Contests</Button>
        </Link>
        <Link href="/">
          <Button variant="secondary">Host a Contest</Button>
        </Link>
      </div>
    </div>
  );
}
