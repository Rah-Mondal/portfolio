import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rahul Mondal - Full Stack Web Developer",
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
    title: "Rahul Mondal - Full Stack Web Developer",
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
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
