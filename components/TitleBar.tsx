import React, { ReactElement } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

interface TitleBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const TitleBar = ({ isMenuOpen, toggleMenu }: TitleBarProps): ReactElement => {
  return (
    <div className="order-1 flex flex-row items-center justify-between p-2 text-center">
      <div className="flex-grow text-4xl">Kiln Collective</div>
      <div className="mr-2 sm:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default TitleBar;
