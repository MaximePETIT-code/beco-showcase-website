import React from "react";
import "./Button.css";

export default function Button({
  type = "primary",
  link,
  title,
  arrow = false,
}) {
  return (
    <div className="button">
      <a href={link} className={`button__link button__${type}`}>
        {title}
        {arrow && (
          <svg
            className="button__link-arrow"
            width="14"
            height="7"
            viewBox="0 0 18 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.6137 2.34995H0.482142C0.215879 2.34995 0 2.51128 0 2.71027V4.39175C0 4.59074 0.215879 4.75207 0.482142 4.75207H12.6137V6.13506C12.6137 6.77709 13.6523 7.09861 14.2598 6.64464L17.7176 4.06059C18.0941 3.77915 18.0941 3.32287 17.7176 3.04146L14.2598 0.457414C13.6524 0.00344366 12.6137 0.324967 12.6137 0.966993V2.34995Z" />
          </svg>
        )}
      </a>
    </div>
  );
}
