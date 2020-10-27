import * as React from "react";

export default function MenuIcon() {
  return (
    // <svg viewBox="0 0 20 20" {...props}>
    //   <title>{"Menu"}</title>
    //   <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    // </svg>

    <svg
      className="w-3 h-3 hover:fill-0 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
