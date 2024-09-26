import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navigation = [
    {
      label: "TV Shows",
      href: "tv",
    },
    {
      label: "Movies",
      href: "tv",
    },
  ];
  return (
    <header className=" fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className=" container mx-auto px-2 flex items-center h-full">
        <div>
          <img src={logo} alt="logo" width={120} />
        </div>
        <nav className="flex items-center gap-1 ml-5">
          {navigation.map((item, index) => {
            return (
              <div>
                <NavLink key={item.label} to={item.href}>
                  {item.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
