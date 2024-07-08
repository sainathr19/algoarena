import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";
import { Badge, FilePenIcon, SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const HostHomePage = () => {
  return (
    <Card className="outline-none border-none shadow-none">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>Dashboard</CardTitle>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Create New Contest
        </Link>
      </CardHeader>
      <CardContent className="grid grid-cols-3">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div className="grid gap-1">
              <CardTitle>Hackathon 2023</CardTitle>
              <CardDescription className="text-center">
                April 1, 2024
              </CardDescription>
            </div>
            {/* <Badge>Live</Badge> */}
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Participants</span>
              <span>234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <span>Ongoing</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="ghost" size="icon">
              <FilePenIcon className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="ghost" size="icon">
              <UsersIcon className="w-4 h-4" />
              <span className="sr-only">Participants</span>
            </Button>
            <Button variant="ghost" size="icon">
              <SettingsIcon className="w-4 h-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
};

export default HostHomePage;
