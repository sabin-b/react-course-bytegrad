import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Evento - find events around you",
    template: "%s - Evento - find events around you",
  },
  description: "browse more than 10000 events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gray-950 text-white antialiased flex flex-col min-h-screen overflow-y-scroll",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Header />
        <main className="max-w-7xl w-full mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
