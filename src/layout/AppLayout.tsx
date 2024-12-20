import { Sidebar } from "@/components/custom/nav/Sidebar";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex w-full h-[100vh] bg-[#FAFAFA] ">
      <Sidebar />
      <div className=" h-screen overflow-y-auto lg:w-[calc(100%-18rem)] w-full ">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
