import React from "react";

export default function Home() {
  return (
    <div>
      <div className="w-full p-4 flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="text-gray-700">
          This is the main content area of the home page.
        </p>
        <div className="flex flex-col gap-4 ">
          <div className="w-[230px] h-[230px] border border-blue-700 border-[5px]"></div>
          <div className="w-[230px] h-[230px] border border-blue-700 border-[5px]"></div>
          <div className="w-[230px] h-[230px] border border-blue-700 border-[5px]"></div>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="font-light text-lg">A NEW DAY ONE</p>
              </div>
      </div>
    </div>
  );
}
