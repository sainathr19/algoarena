import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-112px)] bg-gradient-to-r from-primary to-primary-foreground">
      <h1 className="text-5xl font-bold text-white">Welcome to AlgoArena</h1>
      <p className="text-xl text-white mt-4">
        Coding competitions to challenge your skills
      </p>
      <div className="mt-8">
        <Link href="/contest/1001">
          <Button variant="secondary">Explore Contests</Button>
        </Link>
        <Button variant="secondary" className="ml-4">
          Host a contest
        </Button>
      </div>
    </div>
  );
}
