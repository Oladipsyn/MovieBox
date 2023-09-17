import React from "react";
import SideBar from "./sideBar";

const LayOut = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[20%] hidden lg:flex">
        <SideBar />
      </div>
      <main className="w-[95%] lg:w-[80%] ">{children}</main>
    </div>
  );
};

export default LayOut;
