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
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/authContext";
export default function LoginForm() {
  const [Formdata, setFormData] = useState({
    username: "",
    password: "",
  });
  const { toast } = useToast();
  const router = useRouter();
  const params = useSearchParams();
  const redirecturl = decodeURIComponent(params.get("redirect") || "/");
  const { setLoggedin } = useAuth();
  const handleSignIn = async () => {
    if (Formdata.username === "" || Formdata.password === "") {
      toast({
        description: "Invalid Inputs!",
        variant: "destructive",
      });
      return;
    }
    const options = {
      method: "POST",
      url: "http://localhost:5000/auth/signin",
      params: {},
      headers: {
        "content-type": "application/json",
      },
      data: {
        username: Formdata.username,
        password: Formdata.password,
      },
    };
    axios.request(options).then((res) => {
      if (res.data.result === "success") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", Formdata.username);
        toast({
          description: "Login Successful",
          variant: "success",
        });
        document.cookie = `authToken=${res.data.token}; path=/;`;
        setLoggedin(true);
        console.log("Redirecting : " + redirecturl);
        setTimeout(() => {
          router.push(redirecturl);
        }, 1000);
      } else if (res.data.result === "ude") {
        toast({
          description: "User not Found ",
          variant: "destructive",
        });
      } else {
        toast({
          description: "Wrong Password",
          variant: "destructive",
        });
      }
    });
  };
  return (
    <Card className="sm:px-6 w-full mx-4 sm:w-[450px] mt-10">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => {
                setFormData({ ...Formdata, username: e.target.value });
              }}
              id="username"
              type="text"
              placeholder=""
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              onChange={(e) => {
                setFormData({ ...Formdata, password: e.target.value });
              }}
            />
          </div>
          <Button onClick={handleSignIn} type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
