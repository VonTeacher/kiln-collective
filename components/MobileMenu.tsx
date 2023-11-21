import React, { ReactElement } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  members: Member[];
}

interface Member {
  firstName: string;
}

const MobileMenu = ({ isOpen, members }: MobileMenuProps): ReactElement => {
  return (
    <div
      className={`fixed top-[57px] h-full w-full bg-red-200 text-center transition duration-500 sm:hidden ${
        isOpen ? "" : "-translate-x-full"
      }`}
    >
      <div>
        <div className="text-2xl">Our Members</div>
        {members ? (
          <ul>
            {members.map(({ firstName }) => (
              <li
                key={firstName}
                className="mx-auto mb-4 max-w-min rounded-full border border-black px-4 py-2 text-3xl"
              >
                {firstName}
              </li>
            ))}
          </ul>
        ) : (
          <span className="italic">Loading...</span>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
