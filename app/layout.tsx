import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Mondal — Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in building scalable web applications with React, Next.js, Node.js, and MongoDB. Available for freelance and full-time roles.",
  keywords: [
    "Rahul Mondal",
    "full stack developer",
    "web developer",
    "React",
    "Next.js",
    "Node.js",
    "MERN stack",
  ],
  openGraph: {
    title: "Rahul Mondal — Full Stack Web Developer",
    description:
      "Building scalable web applications and real-world systems with modern tech stacks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
