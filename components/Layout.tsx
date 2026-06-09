import React, { ReactNode } from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

const Layout = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div className={`  ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
