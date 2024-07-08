import ContestCard from "@/components/contestspage/contestcard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

const dummyContests = [
  {
    title: "Weekly Contest 1",
    duration: 90,
    problems: 6,
    time: Date.now(),
    contestId: "1001",
  },
  {
    title: "GPCET League",
    duration: 180,
    problems: 10,
    time: Date.now(),
    contestId: "1002",
  },
  {
    title: "DOJO Qualifier 1",
    duration: 60,
    problems: 3,
    time: Date.now(),
    contestId: "1003",
  },
  {
    title: "VIT CodeQuest",
    duration: 180,
    problems: 10,
    time: Date.now(),
    contestId: "1002",
  },
  {
    title: "Codevita 2024",
    duration: 60,
    problems: 3,
    time: Date.now(),
    contestId: "1003",
  },
];

const ContestsPage = () => {
  return (
    <Card className="outline-none border-none shadow-none">
      {/* <CardHeader>
        <CardTitle>Contests</CardTitle>
      </CardHeader> */}
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing">
          <Card className="border-none outline-none shadow-none">
            <CardHeader>
              <CardTitle>Ongoing Contests</CardTitle>
              <CardDescription>
                Checkout the ongoing contests on algoarena
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {dummyContests.map((contest, index) => {
                return (
                  <ContestCard type="ongoing" key={index} info={contest} />
                );
              })}
            </CardContent>
            <CardFooter>
              <CardDescription className="w-full text-center">
                End of Ongoing Contests.
              </CardDescription>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming">
          <Card className="shadow-none outline-none border-none">
            <CardHeader>
              <CardTitle>Upcoming Contests</CardTitle>
              <CardDescription>
                Checkout the upcoming contest on algoarena
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {dummyContests.map((contest, index) => {
                return (
                  <ContestCard type="ongoing" key={index} info={contest} />
                );
              })}
            </CardContent>
            <CardFooter>
              <CardDescription className="w-full text-center">
                End of Upcoming Contests.
              </CardDescription>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card className="border-none shadow-none outline-none">
            <CardHeader>
              <CardTitle>Completed Contests</CardTitle>
              <CardDescription>
                Practise the completed contests on algoarena
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {dummyContests.map((contest, index) => {
                return (
                  <ContestCard type="ongoing" key={index} info={contest} />
                );
              })}
            </CardContent>
            <CardFooter>
              <CardDescription className="w-full text-center">
                End of Completed Contests.
              </CardDescription>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ContestsPage;
