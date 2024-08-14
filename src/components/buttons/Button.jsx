import React from "react";

export default function Button({ title, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary h-10 w-full text-white   uppercase`}
    >
      {title}
    </button>
  );
}
