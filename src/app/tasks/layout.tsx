"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { RelayEnvironmentProvider } from "react-relay";
import { getClientEnvironment } from "@/lib/relay/environment";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RelayEnvironmentProvider environment={getClientEnvironment()}>
          {children}
        </RelayEnvironmentProvider>
      </body>
    </html>
  );
}
