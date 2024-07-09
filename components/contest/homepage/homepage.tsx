"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import StatementCell from "./statement-cell";
import axios from "axios";
import ContestInfo from "./info";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import base_url from "@/lib/url";

type contestProblem = "opened" | "notopened" | "solved";
interface contestProgressType {
  contestId: string;
  score: number;
  solved: number;
  userId: string;
  problems: contestProblem[];
}
const ContestHomePage = () => {
  const [contestProblems, setContestProblems] = useState<Array<any>>([]);
  const [contestProgress, setContestProgress] = useState<contestProgressType>();
  useEffect(() => {
    const Config = {
      method: "POST",
      url: base_url + "/user/get-problems",
      data: {
        contestId: "1001",
      },
    };
    axios.request(Config).then((res) => {
      setContestProblems(res.data);
      console.log(res.data);
    });
    const progressRequestConfig = {
      method: "POST",
      url: base_url + "/user/getcontestprogress",
      data: {
        userId: localStorage.getItem("username"),
        contestId: "1001",
      },
    };
    axios.request(progressRequestConfig).then((res) => {
      setContestProgress(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center text-[1.5rem]">
          Weeekly Contest - 1
        </CardTitle>
      </CardHeader>
      <CardContent className="flex w-full gap-3">
        <section className=" flex flex-col gap-3 w-[70%]">
          {contestProblems &&
            contestProblems.map((problem, index) => {
              return (
                <StatementCell
                  key={index}
                  statement={problem}
                  status={
                    contestProgress
                      ? contestProgress.problems[problem.problemId]
                      : "notopened"
                  }
                />
              );
            })}
        </section>
        {contestProgress && <ContestInfo progress={contestProgress} />}
      </CardContent>
    </Card>
  );
};

export default ContestHomePage;
