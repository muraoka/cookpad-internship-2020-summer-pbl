import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <h1>
          <span>ちょうどにできたね</span>
        </h1>
      </Link>
      <style jsx>{`
        div {
          height: 60px;
        }
        h1 {
          font-size: 20px;
        }
        span {
          border-bottom: 2px solid #000;
        }
      `}</style>
    </div>
  );
};

export default Header;
