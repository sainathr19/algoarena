"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { DotFilledIcon, LockClosedIcon } from "@radix-ui/react-icons";
type ContestType = "ended" | "upcoming" | "ongoing";
interface ContestCardProps {
  type: ContestType;
  info: {
    title: string;
    contestId: string;
    duration: number;
    problems: number;
    time: number;
  };
}
const ContestCard = (props: ContestCardProps) => {
  const Type = props.type;
  const [contestInfo, setContestInfo] = useState<ContestCardProps["info"]>(
    props.info
  );
  return (
    <Card className="w-full relative">
      <section className="flex gap-4 items-center absolute right-5 top-7">
        <iframe
          className="h-3 w-3"
          src="https://lottie.host/embed/9a659b60-798e-4a72-9aab-175626d31c86/v64qZfP6F9.json"
        ></iframe>
        <LockClosedIcon />
      </section>
      <CardHeader className="flex flex-row justify-around">
        <CardTitle className="text-center">{contestInfo.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3">
        <div className="flex flex-col items-center gap-3">
          <CardDescription>Problems</CardDescription>
          <CardTitle className="text-lg">{contestInfo.problems}</CardTitle>
        </div>
        <div className="flex flex-col items-center gap-3">
          <CardDescription>Duration</CardDescription>
          <CardTitle className="text-lg">{contestInfo.duration} Mins</CardTitle>
        </div>
        <div className="flex flex-col items-center gap-3">
          <CardDescription>Ends in </CardDescription>
          <CardTitle className="text-lg tracking-wider">00:15:56</CardTitle>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full">
          {Type === "ongoing" ? "Participate" : "Preview"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContestCard;
