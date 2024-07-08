import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in / Sign up",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex justify-center items-center">{children}</div>;
}
