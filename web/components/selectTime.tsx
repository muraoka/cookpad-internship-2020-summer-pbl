import React, { useContext } from "react";
import { TimeContext } from "../contexts/TimeContext";

type Props = { fixTime: React.Dispatch<React.SetStateAction<boolean>> };

const SelectTime: React.FC<Props> = (props) => {
  const { setTime, setInitialTime } = useContext(TimeContext);
  const selectTime = (time: number) => {
    setTime(time);
    setInitialTime(time);
    props.fixTime(true);
  };

  return (
    <div>
      <p>何分で作る?</p>
      <div className="buttons">
        {[15, 30, 45].map((t) => {
          return (
            <button key={t} onClick={() => selectTime(t)}>
              {t}分
            </button>
          );
        })}
      </div>
      <style jsx>{`
        div {
          text-align: center;
        }
        p {
          font-size: 30px;
          font-weight: bold;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        button {
          background-color: #ff9933;
          font-size: 40px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin: 30px 0 0 0;
        }
      `}</style>
    </div>
  );
};

export default SelectTime;
