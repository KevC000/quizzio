import Link from "next/link";
import React from "react";

type Props = {};

const NavLogo = (props: Props) => {
  return (
    <div className="font-bold text-md m-4 p-2 rounded-lg border-slate-800 border-4">
      <Link href="/">Quizzio</Link>
    </div>
  );
};

export default NavLogo;
