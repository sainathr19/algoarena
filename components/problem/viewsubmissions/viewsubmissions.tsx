import axios from "axios";
import { useParams } from "next/navigation";
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
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import base_url from "@/lib/url";
const ViewSubmissions = () => {
  const [Submissions, setSubmissions] = useState([]);
  const params = useParams();
  useEffect(() => {
    const options = {
      method: "POST",
      url: base_url + "/user/submissions",
      data: {
        userId: localStorage.getItem("username"),
        problemId: params.problemId,
        contestId: "1001",
      },
    };

    axios.request(options).then((res) => {
      console.log(res.data);
      setSubmissions(res.data);
    });
  }, []);
  return (
    <Card className="border-none outline-none shadow-none pb-5 h-full">
      <CardContent>
        <Table>
          <TableCaption>
            {Submissions.length === 0
              ? "No submissions to show"
              : "A list of submissions made by you to this problem."}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Time stamp</TableHead>
              <TableHead className="text-center">Language</TableHead>
              <TableHead className="text-center">Verdict</TableHead>
              <TableHead className="text-center">Score</TableHead>
              <TableHead className="text-center">Code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Submissions.map(
              ({ timestamp, Language, verdict, score }, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">{timestamp}</TableCell>
                  <TableCell className="text-center">{Language}</TableCell>
                  <TableCell className="text-center">{verdict}</TableCell>
                  <TableCell className="text-center">{score}</TableCell>
                  <TableCell className="text-center">
                    <Link
                      href="/"
                      className="border border-1 rounded-lg p-3 px-4"
                    >
                      View
                    </Link>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ViewSubmissions;
