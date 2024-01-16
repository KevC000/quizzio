import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  link: string;
};

const NavLink = ({ name, link }: Props) => {
  return (
    <li className="mx-2 text-md font-bold rounded-lg p-2 hover:bg-slate-200">
      <Link href={link}>{name}</Link>
    </li>
  );
};

export default NavLink;
