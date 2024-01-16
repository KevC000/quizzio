import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";

type Props = {};

const NavBar = (props: Props) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "History", link: "/history" },
    { name: "About", link: "/about" },
  ];
  return (
    <header className="flex w-full h-14 shadow-lg items-center justify-center bg-slate-50 ">
      <NavLogo />
      <ul className="flex grow w-full h-full items-center justify-center ">
        {links.map((link, index) => {
          return <NavLink key={index} name={link.name} link={link.link} />;
        })}
      </ul>
    </header>
  );
};

export default NavBar;
