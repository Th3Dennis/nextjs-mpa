import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link href={"/"}>
          <a className="navbar-brand">TH3</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link " aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/style_guide"}>
                <a className="nav-link ">Style Guide</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/copyright"}>
                <a className="nav-link" tabIndex="-1" aria-disabled="true">
                  Copyright
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
