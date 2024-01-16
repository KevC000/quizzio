import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizzio",
  description: "Generate quizzes using ai based on your topic of choice!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen bg-slate-300 flex flex-col items-center justify-center`}
      >
        <NavBar />
        <main className="container h-full w-full">{children}</main>
      </body>
    </html>
  );
}
