import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/authContext";

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
        <TooltipProvider>
          <ScrollArea>
            <Toaster />
            <AuthProvider>
              <Navbar />
              <div className="h-[cal(100vh-64px)]">{children}</div>
            </AuthProvider>
          </ScrollArea>
        </TooltipProvider>
      </body>
    </html>
  );
}
