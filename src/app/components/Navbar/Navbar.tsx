"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";


interface NavbarProps {
  navHeadText?: string;
}

const Navbar: FC<NavbarProps> = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(sessionStorage?.getItem("userLogged") == "true");
  }, []);

  return (
    <div className={styles.Navbar}>
      <div className="col-12 my-3 d-flex justify-content-between">
        <div
          className="navbar-brand col-2 mb-0 h1 mt-auto"
        >
          <Link href={"home"}>Home</Link>
        </div>
        {isLogged && (
          <div
            className="navbar-brand col-2 mb-0 h1 mt-auto"
          >
            <Link href={"quiz"}>Quiz</Link>
          </div>
        )}
        {isLogged && (
          <div
            className="navbar-brand col-2 mb-0 h1 mt-auto"
          >
             <Link href={"dashboard"}>Dashboard</Link>
          </div>
        )}
        {isLogged && (
          <div
            className="navbar-brand col-2 mb-0 h1 mt-auto"
          >
             <Link href={"profile"}>My Account</Link>
          </div>
        )}
        {!isLogged && (
          <div className="col-2">
            <Link href={"login"}>Log in</Link>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
