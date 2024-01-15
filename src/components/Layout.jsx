import React from "react";
import NavPage from "./NavPage";

export default function Layout({ children }) {
  return (
    <div>
      <NavPage />
      {children}
      <div className="w-full h-40 bg-pink-400"></div>
    </div>
  );
}
