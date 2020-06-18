import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/select-name">Select Name</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
