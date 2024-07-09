import ContestCard from "@/components/contestspage/contestcard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
type TabType = "upcoming" | "completed" | "ongoing";
interface contestTabProps {
  type: TabType;
  contests: any;
}
const ContestsTab = (props: contestTabProps) => {
  const { type, contests } = props;
  return (
    <Card className="border-none outline-none shadow-none">
      {contests.length > 0 ? (
        <>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
            {contests.map(
              (contest: any, index: React.Key | null | undefined) => {
                return (
                  <ContestCard
                    status={type}
                    key={index}
                    info={contest}
                    isPrivate={contest.isPrivate}
                  />
                );
              }
            )}
          </CardContent>
          <CardFooter>
            <CardDescription className="w-full text-center">
              End of {type} Contests.
            </CardDescription>
          </CardFooter>
        </>
      ) : (
        <CardFooter>
          <CardDescription className="w-full text-center">
            No data to show
          </CardDescription>
        </CardFooter>
      )}
    </Card>
  );
};

export default ContestsTab;
