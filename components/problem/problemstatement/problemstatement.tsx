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
import { decode } from "base-64";

import React, { useEffect, useState } from "react";
interface ProblemStatementType {
  proplemId: string;
  contestId: string;
  title: string;
  description: string;
  maxScore: number;
  inputFormat: string;
  outputFormat: string;
  sampleInput: string;
  sampleOutput: string;
  explanation: string;
  usersTried: number;
  successfullSubmissions: number;
  note?: string;
  constraints: string;
}

const ProblemStatement = (props: { statement: ProblemStatementType }) => {
  const [statement, setStatement] = useState<ProblemStatementType>(
    props.statement
  );
  useEffect(() => {
    console.log(statement);
    console.log(statement.sampleInput);
  }, [statement]);
  return (
    <>
      <div>
        {statement && (
          <Card className="border-none outline-none shadow-none">
            <CardHeader className="py-1">
              <CardTitle className="text-2xl">{statement.title}</CardTitle>
              <CardDescription className="text-base">
                {statement.description}
              </CardDescription>
              <CardDescription>
                Max Score : {statement.maxScore}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Input Format</AccordionTrigger>
                  <AccordionContent className="text-base">
                    {statement.inputFormat}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Output Format</AccordionTrigger>
                  <AccordionContent>{statement.outputFormat}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Constraints</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-wrap">
                    {decode(statement.constraints)}
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
                <div className="bg-slate-200 rounded-xl p-3 my-2 whitespace-pre-wrap ">
                  {decode(statement.sampleInput)}
                </div>
                <CardDescription>Sample output</CardDescription>
                <div className="bg-slate-200 rounded-xl p-3 my-2 whitespace-pre-wrap">
                  {decode(statement.sampleOutput)}
                </div>
                <CardDescription>Explanataion</CardDescription>
                <div className="rounded-xl my-2 whitespace-pre-wrap">
                  {statement.description}
                </div>
              </CardContent>
            </Card>
          </Card>
        )}
      </div>
    </>
  );
};

export default ProblemStatement;
