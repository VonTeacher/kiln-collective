"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="container flex flex-col border-b border-black">
      <div
        id="mobile-menu"
        className={`fixed top-[57px] h-full w-full bg-red-200 text-center transition duration-500 sm:hidden ${
          isMenuOpen ? "" : "-translate-x-full"
        }`}
      >
        mobile nav text here
      </div>
      <div className="order-1 flex flex-row items-center justify-between p-2 text-center">
        <div className="flex-grow text-4xl">Kiln Collective</div>
        <div className="mr-2 sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  );
};

export default Header;
