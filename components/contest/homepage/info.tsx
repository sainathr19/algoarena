import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
type problemId = string;
interface ContestInfoProps {
  progress: {
    solved: number;
    score: number;
    userId: string;
    problems: problemId[];
    contestId: string;
  };
}
const ContestInfo = (props: ContestInfoProps) => {
  const { solved, score, contestId } = props.progress;
  return (
    <section className="w-[30%] h-max flex flex-col gap-3">
      <Card>
        <CardHeader></CardHeader>
        <CardContent className="text-center flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <CardDescription className="text-lg">
              Contest Ends in
            </CardDescription>
            <CardTitle className="text-2xl">00:00:00</CardTitle>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <CardDescription className="text-lg">Solved</CardDescription>
              <CardTitle className="text-2xl">{solved}/6</CardTitle>
            </div>
            <div className="flex flex-col gap-2">
              <CardDescription className="text-lg">Score</CardDescription>
              <CardTitle className="text-2xl">{score}/600</CardTitle>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="mt-5">
          <Link href={"/leaderboard/" + contestId}>
            <Button
              variant={"secondary"}
              className="w-full flex items-center gap-3"
            >
              View Leaderboard
              <ArrowTopRightIcon />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContestInfo;
