"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "../../../public/firstLogo.png";

const NavBar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <Image
          src={logo}
          className="w-14 rounded-full mr-2"
          alt="Waste-Not Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-slate-600">
          Waste-Not
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
