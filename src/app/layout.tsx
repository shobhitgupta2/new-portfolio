import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shobhit Gupta",
  description: "Portfolio website of Shobhit Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-[1240px] mx-auto grid grid-flow-cols-1 gap-6 lg:grid-flow-cols-1 lg:gap-8">
            <nav className="w-full max-h-1/6 p-4 flex justify-between">
              <div className="flex flex-row items-center justify-between gap-8 py-4">
                <Link
                  href="#projects-section"
                  className="hover:underline underline-offset-4 font-mono
                  hover:text-primary ease-in-out duration-200"
                >
                  projects
                </Link>
                <Link
                  href="#experience-section"
                  className="hover:underline underline-offset-4 font-mono
                  hover:text-primary ease-in-out duration-200"
                >
                  experience
                </Link>
              </div>
              <ModeToggle />
            </nav>
            {children}
            <footer className="p-4 flex justify-center items-center text-gray-500">
              © 2025 Shobhit Gupta
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
