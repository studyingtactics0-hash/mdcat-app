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
  metadataBase: new URL("https://mdcat-app-alpha.vercel.app"),
  title: "STUDYING TACTICS",
  description: "WHERE WE GROW TOGETHER",

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  openGraph: {
    title: "STUDYING TACTICS",
    description: "WHERE WE GROW TOGETHER",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "STUDYING TACTICS",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "STUDYING TACTICS",
    description: "WHERE WE GROW TOGETHER",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
