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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
const ViewSubmissions = () => {
  const [Submissions, setSubmissions] = useState([]);
  const params = useParams();
  useEffect(() => {
    const options = {
      method: "POST",
      url: "http://localhost:5000/user/submissions",
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
    <Card className="border-none outline-none shadow-none pb-5">
      <CardContent>
        <Table>
          <TableCaption>
            A list of submissions made by you to this problem.
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
                  <TableCell className="text-center">{index}</TableCell>
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
