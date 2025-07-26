import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-screen max-w-[640px] mx-auto p-4">
      <Outlet />
    </div>
  );
}
