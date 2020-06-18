import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/select-name">Select Name</Link>
          </li>
          <li>
            <Link to="/handle-error">Handle Error</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
