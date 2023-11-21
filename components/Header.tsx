"use client";
import React, { useState } from "react";

import MobileMenu from "./MobileMenu";
import TitleBar from "./TitleBar";

interface HeaderProps {
  allMembersData: Member[];
}

interface Member {
  firstName: string;
}

const Header = ({ allMembersData }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed left-0 right-0 top-0 flex flex-col border-b border-black bg-white">
      <MobileMenu isOpen={isMenuOpen} members={allMembersData} />
      <TitleBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
