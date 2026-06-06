import type { Metadata } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Griffin Kuchar",
  description: "Computer Science Student, AI and Machine Learning Researcher, Software and Systems Engineer, Technology Reader and Writer",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${schibsted.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        </body>
    </html>
  );
}
