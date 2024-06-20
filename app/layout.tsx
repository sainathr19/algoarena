import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "algoArena",
  description: "Get better at alogorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ScrollArea>
          <Toaster />
          <Navbar />
          <div className="h-[cal(100vh-64px)]">{children}</div>
        </ScrollArea>
      </body>
    </html>
  );
}
