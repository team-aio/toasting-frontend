import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthSession from "@/AuthSession";
import LoginAlertWrapper from "@/components/layout/LoginAlertWrapper";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toasting",
  description: "개발자를 위한, 블로그 Toasting",
  keywords: "Toasting",
  authors: [{ name: "Toasting", url: "https://github.com/YOON-CC" }],
  robots: "index, follow",
  themeColor: "#ffffff",
  openGraph: {
    title: "Toasting",
    description: "toasting",
    url: "https://www.toasting.io/",
    siteName: "toasting",

    locale: "ko_KR",
    type: "article",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Toasting" />
        <meta name="keywords" content="Toasting" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Toasting" />
        <meta property="og:description" content="Toasting" />
        <meta property="og:url" content="https://www.dev-chan.site/" />
        <meta property="og:site_name" content="Toasting" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image-linter.png"
        />
        <meta property="og:locale" content="ko_KR" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthSession>
          <Suspense fallback={null}>
            <LoginAlertWrapper />
          </Suspense>
          {children}
        </AuthSession>
      </body>
    </html>
  );
}
