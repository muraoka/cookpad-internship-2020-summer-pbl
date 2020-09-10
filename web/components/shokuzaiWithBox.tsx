import React from "react";
import { Shokuzai } from "../interfaces/shokuzai";

type Props = { shokuzai: Shokuzai };

const ShokuzaiWithBox: React.FC<Props> = (props) => {
  const nameWithUnit = (shokuzai: Shokuzai) => {
    if (shokuzai.unit === "大さじ" || shokuzai.unit === "小さじ") {
      return `${props.shokuzai.name}: ${props.shokuzai.unit} ${props.shokuzai.count}`;
    }
    return `${props.shokuzai.name}: ${props.shokuzai.count} ${props.shokuzai.unit}`;
  };

  return (
    <div>
      <p>
        <input type="checkbox" />
        {nameWithUnit(props.shokuzai)}
      </p>
      <style jsx>{`
        div {
          text-align: left;
          margin: 0 0 0 10vw;
        }
        p {
          font-size: 20px;
          margin-bottom: 8px;
        }
        input {
          margin: 0 8px 0 0;
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
};

export default ShokuzaiWithBox;
