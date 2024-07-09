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
import { LockClosedIcon } from "@radix-ui/react-icons";
import Timer from "../timer/timer";
type contestStatus = "completed" | "upcoming" | "ongoing";
interface ContestCardProps {
  status: contestStatus;
  isPrivate: boolean;
  info: {
    title: string;
    contestId: string;
    duration: number;
    problems: number;
    time: number;
    startTime: string;
    endTime: string;
  };
}
const ContestCard = (props: ContestCardProps) => {
  const { isPrivate, status } = props;
  const [contestInfo, setContestInfo] = useState<ContestCardProps["info"]>(
    props.info
  );
  return (
    <Card className="w-full relative">
      <section className="flex gap-4 items-center absolute right-7 top-7">
        {status === "ongoing" && (
          <iframe
            className="h-3 w-3"
            src="https://lottie.host/embed/9a659b60-798e-4a72-9aab-175626d31c86/v64qZfP6F9.json"
          ></iframe>
        )}
        {isPrivate && <LockClosedIcon />}
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
          <CardDescription>
            {status === "ongoing" ? "Ends in" : "Starts in"}
          </CardDescription>
          <CardTitle className="text-lg tracking-wider">
            <Timer
              startTime={contestInfo.startTime}
              endTime={contestInfo.endTime}
            />
          </CardTitle>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full">
          {status === "ongoing" ? "Enter" : "Preview"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContestCard;
