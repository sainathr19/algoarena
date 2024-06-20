import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const ProblemStatement = () => {
  return (
    <Card className="border-none outline-none shadow-none">
      <CardHeader className="py-1">
        <CardTitle className="text-2xl">Largest and Second Largest</CardTitle>
        <CardDescription className="text-base">
          You are given an array A of N integers.Find the maximum sum of two
          distinct integers in the array.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Input Format</AccordionTrigger>
            <AccordionContent className="text-base">
              The first line of input will contain a single integer T, denoting
              the number of test cases. Each test case consists of multiple
              lines of input. The first line of each test case contains single
              integer N — the size of the array.The next line contains N
              space-separated integers, denoting the array A.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Output Format</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <Card className="border-none outline-none shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Sample Test cases</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Sample input</CardDescription>
          <div className="bg-slate-200 rounded-xl p-3 my-2">OK</div>
          <CardDescription>Sample output</CardDescription>
          <div className="bg-slate-200 rounded-xl p-3 my-2">OK</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Sample input</CardDescription>
          <div className="bg-slate-200 rounded-xl p-3 my-2">OK</div>
        </CardContent>
      </Card>
    </Card>
  );
};

export default ProblemStatement;
