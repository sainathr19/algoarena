"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import StatementCell from "./statement-cell";
import axios from "axios";
import ContestInfo from "./info";
interface contestProgressType {
  contestId: string;
  score: number;
  solved: number;
  userId: string;
  problems: {
    problemId: string;
  };
}
const ContestHomePage = () => {
  const [contestProblems, setContestProblems] = useState<Array<any>>([]);
  const [contestProgress, setContestProgress] = useState<contestProgressType>();
  useEffect(() => {
    const Config = {
      method: "POST",
      url: "http://localhost:5000/user/get-problems",
      data: {
        contestId: "1001",
      },
    };
    axios.request(Config).then((res) => {
      setContestProblems(res.data);
    });
    const progressRequestConfig = {
      method: "POST",
      url: "http://localhost:5000/user/getcontestprogress",
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
        <CardTitle className="text-center text-[2rem]">
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
                  status="notopened"
                />
              );
            })}
        </section>
        <ContestInfo progress={contestProgress} />
      </CardContent>
    </Card>
  );
};

export default ContestHomePage;
