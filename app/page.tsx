import ContestCard from "@/components/contestspage/contestcard";
import Footer from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HostFeatures from "@/lib/host_features";
import IdeFeatures from "@/lib/ide_features";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Card className="h-[90vh] flex flex-col justify-center sm:items-center">
        <CardHeader className="sm:w-1/2">
          <CardTitle className="text-left sm:text-center text-5xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Elevate Your Coding Skills with AlgoArena
          </CardTitle>
          <CardDescription className="text-left sm:text-center text-base sm:text-xl">
            Compete in coding contests, practice algorithms, and showcase your
            problem-solving abilities on the ultimate platform for programmers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-5 sm:justify-center">
          <Link
            href="/contest/1001"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Demo Contest
          </Link>
          <Link
            href="/contests"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Explore Contests
          </Link>
          {/* <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Host a Contest
          </Link> */}
        </CardFooter>
        <iframe
          className="py-8"
          src="https://lottie.host/embed/42e7a490-5e4e-499b-b3ea-5d182ab4af5e/MGg5tJnMlW.json"
        ></iframe>
      </Card>
      <Card id="upcoming-contests" className="flex flex-col items-center">
        <CardHeader className="flex flex-col items-center">
          <Badge className="w-max bg-muted text-black  hover:bg-muted">
            Featured Contests
          </Badge>
          <CardTitle className="text-center text-4xl">
            Upcoming Coding Challenges
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Explore the latest coding contests and challenges hosted on
            AlgoArena. Test your skills, compete against fellow programmers, and
            climb the leaderboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full sm:w-3/4">
          <ContestCard
            status="upcoming"
            isPrivate={false}
            info={{
              title: "Codevita 2024",
              duration: 60,
              problems: 3,
              time: Date.now(),
              contestId: "1003",
              startTime: "",
              endTime: "",
            }}
          />
          <ContestCard
            status="upcoming"
            isPrivate={false}
            info={{
              title: "Codevita 2024",
              duration: 60,
              problems: 3,
              time: Date.now(),
              contestId: "1003",
              startTime: "",
              endTime: "",
            }}
          />
          <ContestCard
            status="upcoming"
            isPrivate={false}
            info={{
              title: "Codevita 2024",
              duration: 60,
              problems: 3,
              time: Date.now(),
              contestId: "1003",
              startTime: "",
              endTime: "",
            }}
          />
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center" id="ide-features">
        <CardHeader className="flex flex-col items-center">
          <Badge className="w-max bg-muted text-black hover:bg-muted">
            Practise and Improve
          </Badge>
          <CardTitle className="text-center text-4xl">
            Hone Your Coding Skills
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Utilize our platform to participate in contests and improve your
            problem-solving abilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full sm:w-3/4">
          {IdeFeatures.map((feature, index) => {
            return (
              <Card className="grid-item py-3 sm:py-4" key={index}>
                <CardHeader className="p-1">
                  <CardDescription className=" text-sm sm:text-xl text-black font-semibold flex gap-2 items-center p-2 justify-center">
                    {feature.icon}
                    {feature.name}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center" id="hosting-features">
        <CardHeader className="flex flex-col items-center">
          <Badge className="w-max bg-muted text-black  hover:bg-muted">
            Host a Contest
          </Badge>
          <CardTitle className="text-center text-4xl">
            Unleash Your Hosting Prowess
          </CardTitle>
          <CardDescription className="text-center text-lg">
            As a contest host, enjoy a suite of powerful features to create and
            manage your own coding challenges.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full sm:w-3/4">
          {HostFeatures.map((feature, index) => {
            return (
              <Card className="grid-item py-3 sm:py-4" key={index}>
                <CardHeader className="p-1">
                  <CardDescription className=" text-sm sm:text-xl text-black font-semibold flex gap-2 items-center p-2 justify-center">
                    {feature.icon}
                    {feature.name}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </CardContent>
      </Card>
      <Footer />
    </>
  );
}
