"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import axios from "axios";
import base_url from "@/lib/url";

export default function LoginForm() {
  const { toast } = useToast();
  const [Formdata, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });
  const handleSignUp = async () => {
    if (Formdata.password != Formdata.confirmpassword) {
      toast({
        description: "Passwords doesn't match !",
        variant: "destructive",
      });
      return;
    }
    const SigupConfig = {
      method: "POST",
      url: base_url + "/auth/signup",
      data: {
        username: Formdata.username,
        password: Formdata.password,
      },
    };
    axios.request(SigupConfig).then((res) => {
      const statusCode = res.data.statusCode;
      if (statusCode === 0) {
        toast({
          description: "Account created",
          variant: "success",
        });
      } else if (statusCode === 3) {
        toast({
          description: "Username already Taken",
          variant: "destructive",
        });
      }
    });
  };
  return (
    <Card className="sm:px-6 w-full sm:max-w-[450px] mt-10 mx-4">
      <CardHeader>
        <CardTitle className="text-xl text-center">Sign Up</CardTitle>
        <CardDescription className="text-center">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">Username</Label>
            <Input
              id="first-name"
              placeholder="test123"
              required
              onChange={(e) => {
                setFormData({ ...Formdata, username: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => {
                setFormData({ ...Formdata, password: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmpassword">Confirm Password</Label>
            <Input
              id="confirmpassword"
              type="password"
              onChange={(e) => {
                setFormData({ ...Formdata, confirmpassword: e.target.value });
              }}
            />
          </div>
          <Button onClick={handleSignUp} type="submit" className="w-full">
            Create an account
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?&nbsp;
          <Link href="/auth/signin" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
