import React from "react";
import "./BigTitle.css";

export default function BigTitle({ title, className = "" }) {
  return <h1 className={`bigTitle ${className}`}>{title}</h1>;
}
