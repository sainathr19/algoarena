"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import statusTypes from "@/lib/statustypes";
import { Skeleton } from "@/components/ui/skeleton";
import { decode } from "base-64";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExecutedResultType {
  isAccepted: boolean;
  status: string;
  results: Number[];
  userScore: number;
  maxScore: number;
}

interface RunResultType {
  expected_output: string;
  status: {
    description: string;
    id: number;
  };
  stdin: string;
  stdout: string;
}

interface ExcecutedResultsProps {
  submitResult: ExecutedResultType | null;
  runResult: RunResultType | null;
  loading: boolean;
  isSubmit: boolean;
}

const ExecutedResult = (props: ExcecutedResultsProps) => {
  const { submitResult, runResult, loading, isSubmit } = props;
  useEffect(() => {
    console.log("Run Result Modifird ");
  }, [runResult]);
  return (
    <ScrollArea>
      <Card className="border-none outline-none shadow-none h-full overflow-clip">
        {!loading && !submitResult && !runResult && (
          <CardDescription className="flex items-center justify-center text-xl my-6 h-full">
            Execute Code to view Results
          </CardDescription>
        )}
        {!loading && isSubmit && submitResult && (
          <Card className="h-full outline-none border-none shadow-none">
            <CardHeader className="flex flex-row gap-5 items-center">
              <CardTitle>{submitResult.status}</CardTitle>
              <CardDescription className="text-xl">
                {submitResult.userScore} / {submitResult.maxScore}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 pr-0 flex gap-5 flex-wrap">
              {submitResult.results.map((testcase, index) => {
                return (
                  <Card className="w-max" key={index}>
                    <CardHeader className="py-3 px-6">
                      <CardDescription className="text-lg flex flex-col items-center gap-3">
                        Test #{index + 1}
                        {statusTypes[String(testcase)]}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </CardContent>
          </Card>
        )}
        {loading && (
          <Card className="outline-none shadow-none border-none h-full w-full">
            <CardHeader className="flex flex-row gap-5 items-center">
              <Skeleton className="w-[200px] h-[30px] bg-slate-200 rounded-full" />
              <Skeleton className="w-[100px] h-[30px] bg-slate-200 rounded-full" />
            </CardHeader>
            <CardContent className="flex gap-5 items-center flex-wrap">
              <Skeleton className="w-[100px] h-[80px] bg-slate-200 rounded-lg" />
              <Skeleton className="w-[100px] h-[80px] bg-slate-200 rounded-lg" />
              <Skeleton className="w-[100px] h-[80px] bg-slate-200 rounded-lg" />
              <Skeleton className="w-[100px] h-[80px] bg-slate-200 rounded-lg" />
            </CardContent>
            <CardFooter className="flex gap-5">
              <Skeleton className="w-[100px] h-[80px] bg-slate-200 rounded-lg" />
              <Skeleton className="w-[100px] h-[80px] bg-slate-200 rounded-lg" />
            </CardFooter>
          </Card>
        )}
        {!loading && !isSubmit && runResult && (
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{runResult.status.description}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 py-1">
                <CardDescription className="pl-1">Input</CardDescription>
                <div className="p-2 py-4 bg-slate-200 rounded-xl whitespace-pre-wrap">
                  {decode(runResult.stdin)}
                </div>
              </div>
              <div className="flex flex-col gap-2 py-1">
                <CardDescription>Expected Output</CardDescription>
                <div className="p-2 py-4 bg-slate-200 rounded-xl whitespace-pre-wrap">
                  {decode(runResult.expected_output)}
                </div>
              </div>
              <div className="flex flex-col gap-2 py-1">
                <CardDescription>Output</CardDescription>
                <div className="p-2 py-4 bg-slate-200 rounded-xl whitespace-pre-wrap">
                  {decode(runResult.stdout)}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </Card>
    </ScrollArea>
  );
};

export default ExecutedResult;
