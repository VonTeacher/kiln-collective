"use client";
import React, { useState } from "react";

import MobileMenu from "./MobileMenu";
import TitleBar from "./TitleBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="container flex flex-col border-b border-black">
      <MobileMenu isOpen={isMenuOpen} />
      <TitleBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
