import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
