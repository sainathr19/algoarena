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
      url: "http://localhost:5000/auth/signup",
      data: {
        username: Formdata.username,
        password: Formdata.password,
      },
    };
    axios.request(SigupConfig).then((res) => {
      toast({
        description: res.data.msg,
        variant: res.data.status,
      });
    });
  };
  return (
    <Card className="mx-auto px-6">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
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
                setFormData({ ...Formdata, password: e.target.value });
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
          Already have an account?
          <Link href="/auth/signin" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
