import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          margin: 1rem auto;
          padding: 0 1rem;
          max-width: 400px;
        }
      `}</style>
    </>
  );
};

export default Layout;
