import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTM Operating System | AI-Powered Market Expansion",
  description:
    "Launch your D2C brand with McKinsey-precision intelligence in 48 hours. The only AI GTM Operating System powered by Nestlé-grade offline + online retail data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col bg-[#FDFBF7]"
        style={{ backgroundColor: "#FDFBF7" }}
      >
        {children}
      </body>
    </html>
  );
}
