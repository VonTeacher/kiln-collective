import React, { ReactElement } from "react";
import Header from "./Header";

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="mx-auto max-w-sm">
      <Header />
      {children}
      <div>This is a footer div</div>
    </div>
  );
};

export default RootLayout;
