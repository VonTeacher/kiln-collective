import React, { ReactElement } from "react";
import Header from "./Header";

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="relative mx-auto">
      <Header allMembersData={children.props.allMembersData} />
      {children}
      <p>here&apos;s some text so I cans croll the page not the screen</p>
    </div>
  );
};

export default RootLayout;
