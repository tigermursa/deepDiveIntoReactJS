import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full h-full max-w-[1220px] px-[20px] mx-auto flex justify-between items-center bg-green-400 ">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5 font-semibold">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/service"}>Service</NavLink>
          <Button>
            <NavLink to={"https://www.youtube.com/"}>Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
