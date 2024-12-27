import BackgroundPattern from "@/components/BackgroundPattern";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <BackgroundPattern />
      <main className="max-w-7xl min-h-screen text-white/80 flex flex-col m px-4 mx-auto">
        <Header />
        {children}
        <Footer />
      </main>
    </React.Fragment>
  );
}
