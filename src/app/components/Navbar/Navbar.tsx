'use client';
import React, { FC } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavbarProps {
  navHeadText?:string;
}

const Navbar: FC<NavbarProps> = () => {

  const router = useRouter();

  const goTo = (route:string) => {
    router.push(route);
  }

  return (
    <div className={styles.Navbar}>
      <div className="col-12 my-3 d-flex justify-content-between">
        <div className="navbar-brand col-2 mb-0 h1 mt-auto">Home</div>
        {
          (sessionStorage?.getItem('userLogged')=='true') && <div className="navbar-brand col-2 mb-0 h1 mt-auto" onClick={() => goTo('pages/quiz')}>Quiz</div>
        }
        <div className="col-2">
          <Link href={'pages/login'}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
