import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <header className=" col-span-2 bg-[#1E2640]">
        <Navbar />
      </header>
      <main className="col-span-10 bg-[#FAFAFA] h-screen overflow-scroll main">
        {children}
      </main>
    </div>
  );
};
