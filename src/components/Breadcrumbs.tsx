import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="px-4 w-full">
      <ol className="flex text-sm">
        <li>
          <Link to="/" className="flex items-center space-x-1 hover:underline">
            <HiHome className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          const formattedText = decodeURIComponent(value)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={to} className="flex items-center space-x-1">
              <span className="mx-1">/</span>
              {isLast ? (
                <span>{formattedText}</span>
              ) : (
                <Link to={to} className="hover:underline">
                  {formattedText}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
