"use client";

import ContestCard from "@/components/contestspage/contestcard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

import React, { useEffect, useState } from "react";
import ContestsTab from "./tabs";

const dummyContests = [
  {
    title: "Weekly Contest 1",
    duration: 90,
    problems: 6,
    time: Date.now(),
    contestId: "1001",
    isPrivate: false,
  },
  {
    title: "GPCET League",
    duration: 180,
    problems: 10,
    time: Date.now(),
    contestId: "1002",
    isPrivate: true,
  },
  {
    title: "DOJO Qualifier 1",
    duration: 60,
    problems: 3,
    time: Date.now(),
    contestId: "1003",
    isPrivate: false,
  },
  {
    title: "VIT CodeQuest",
    duration: 180,
    problems: 10,
    time: Date.now(),
    contestId: "1002",
    isPrivate: false,
  },
  {
    title: "Codevita 2024",
    duration: 60,
    problems: 3,
    time: Date.now(),
    contestId: "1003",
    isPrivate: true,
  },
];
interface ContestInfoType {
  contestId: string;
  title: string;
  slug: string;
  duration: number;
  problems: number;
  startTime: string;
  endTime: string;
  isPrivate: boolean;
  participants: number;
}
const ContestsPage = () => {
  const [contests, setContests] = useState<ContestInfoType[]>([]);
  useEffect(() => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/contests",
    };
    axios.request(config).then((res) => {
      setContests(res.data);
    });
  }, []);
  return (
    <Card className="outline-none border-none shadow-none">
      <CardHeader className="flex flex-col items-center">
        <Badge className="w-max bg-muted text-black  hover:bg-muted">
          Contests
        </Badge>
        <CardTitle className="text-center text-3xl sm:text-4xl">
          Explore Coding Contests
        </CardTitle>
        <CardDescription className="text-center text-sm sm:text-lg">
          Browse through our curated selection of coding contests and
          challenges. Find the perfect one to showcase your skills and compete
          against fellow programmers.
        </CardDescription>
        <Input
          className="w-full sm:w-1/2 text-center"
          placeholder="Search for contest"
        />
      </CardHeader>
      <Tabs
        defaultValue="ongoing"
        className=" flex flex-col items-center w-full gap-2"
      >
        <TabsList className="w-2/3 grid grid-cols-3">
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing" className="w-full sm:px-6">
          <ContestsTab
            type="ongoing"
            contests={contests.filter(
              (contest) =>
                new Date(contest.startTime) < new Date() &&
                new Date(contest.endTime) > new Date()
            )}
          />
        </TabsContent>
        <TabsContent value="upcoming" className="w-full sm:px-6">
          <ContestsTab
            type="upcoming"
            contests={contests.filter(
              (contest) => new Date(contest.startTime) > new Date()
            )}
          />
        </TabsContent>
        <TabsContent value="completed" className="w-full sm:px-6">
          <ContestsTab
            type="ongoing"
            contests={contests.filter(
              (contest) => new Date(contest.endTime) < new Date()
            )}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ContestsPage;
