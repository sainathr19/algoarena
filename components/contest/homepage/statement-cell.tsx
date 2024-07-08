import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
type problemStatusType = "notopened" | "opened" | "solved";
interface StatementCellProps {
  statement: {
    title: string;
    problemId: string;
    maxScore: number;
    status: problemStatusType;
  };
  status: problemStatusType;
}
const StatementCell = (props: StatementCellProps) => {
  const { title, maxScore, problemId } = props.statement;
  let status = props.status;
  return (
    <Link
      href={"/problem/" + problemId}
      className={status === "solved" ? "pointer-events-none" : ""}
    >
      <Card className="w-full flex flex-row gap-3 items-center justify-between hover:bg-muted">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="">Max score : {maxScore}</CardDescription>
        </CardHeader>
        <CardContent>
          {status === "solved" ? (
            <CheckIcon
              width={35}
              height={35}
              className="flex items-center"
              color="#60eb3d"
            />
          ) : (
            <ChevronRightIcon
              width={35}
              height={35}
              className="flex items-center"
            />
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default StatementCell;
