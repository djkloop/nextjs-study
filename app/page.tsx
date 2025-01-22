"use client";

import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Banner } from "@/components/home/Banner";
import { Recommendations } from "@/components/home/Recommendations";
import { shows } from "@/config/shows";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Sidebar />
      <main className="relative z-10">
        <Banner shows={shows} />
        <Recommendations shows={shows} />
      </main>
    </div>
  );
}
