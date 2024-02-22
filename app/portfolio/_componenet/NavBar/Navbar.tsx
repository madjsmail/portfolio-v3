"use client";
import React, { useState } from "react";
import "./navbar.css";
import TextReveal from "@/app/_lib/components/TextReveal/TextReveal";
import Link from "next/link";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="content-grid nav-grid">
      <nav className={`full-width ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="nav">
          <h4 className="shimmer">
            <TextReveal text={"Abdelmadjid Smail"} />

            {/* <div className="wrapper">
                              <svg>
                  <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    Smail Abd El Madjid
                  </text>
                              </svg>
                            </div> */}
          </h4>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="burger-icon"></div>
            <div className="burger-icon"></div>
            <div className="burger-icon"></div>
          </div>
          <ul className={isMenuOpen ? "open" : ""}>
            <li>
              <Link href={'/portfolio'} >Home</Link>
            </li>
            <li>
              <Link href={'/portfolio/lab'} >Lab</Link>
            </li>
            <li>
              <Link href={'/portfolio/blog'} >Blog</Link>
            </li>
            {/* <li>
              <Link href={'/portfolio/resume'} >Resume</Link>
            </li>
            <li>
              <Link href={'/portfolio/portfolio'} >Portfolio</Link>
            </li>
            <li>
              <Link href={'/portfolio/skills'} >Skills</Link>
            </li>
            <li>
              <Link href={'/portfolio/contact'} >Contact</Link>
            </li> */}
          </ul>
        </div>
        <div className="menu-overlay" onClick={toggleMenu}></div>
      </nav>
    </div>
  );
}

export default Navbar;
