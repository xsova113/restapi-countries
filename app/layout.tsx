"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Head from "./Head";
import { Header } from "./components";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body
        className={`${nunitoSans.className} text-[#111517] dark:text-white bg-[#FAFAFA] dark:bg-[#202C37] transition`}
      >
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
