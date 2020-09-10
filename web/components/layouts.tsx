import React from "react";
import Header from "../components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <style jsx>{`
        div {
          margin: 1rem auto;
          padding: 0 1rem;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
