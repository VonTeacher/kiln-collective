import React, { ReactElement } from "react";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps): ReactElement => {
  return (
    <div
      className={`fixed top-[57px] h-full w-full bg-red-200 text-center transition duration-500 sm:hidden ${
        isOpen ? "" : "-translate-x-full"
      }`}
    >
      mobile nav text here
    </div>
  );
};

export default MobileMenu;
