"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
const LeaderBoard = () => {
  interface LeaderBoardCell {
    userId: String;
    solved: number;
    score: number;
  }
  const [Leaderboard, setLeaderboard] = useState<Array<LeaderBoardCell>>([]);
  useEffect(() => {
    const LeaderboardRequestConfig = {
      method: "POST",
      url: "http://localhost:5000/user/getleaderboard",
      data: {
        contestId: "1001",
      },
    };
    axios.request(LeaderboardRequestConfig).then((res) => {
      setLeaderboard(res.data);
    });
  }, []);
  return (
    <Card className="container mt-5">
      <CardHeader>
        <CardTitle className="my-2 text-3xl text-center">
          Algoarena Weekly Contest - 1
        </CardTitle>
        <CardDescription className="text-center">
          Users with atleast 1 problem solved will only appear in the
          leaderboard
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead className="text-center">Username</TableHead>
              <TableHead className="text-center">Problems Solved</TableHead>
              <TableHead className="text-center">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Leaderboard ? (
              Leaderboard.map((user, index) => (
                <TableRow
                  key={index}
                  className={
                    localStorage.getItem("username") === user.userId
                      ? "bg-slate-300 hover:bg-slate-400"
                      : ""
                  }
                >
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center">{user.userId}</TableCell>
                  <TableCell className="text-center">{user.solved}</TableCell>
                  <TableCell className="text-center">{user.score}</TableCell>
                </TableRow>
              ))
            ) : (
              <p>No enough data to show</p>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeaderBoard;
