import React, { useContext, useState } from "react";
import { TimeContext } from "../contexts/TimeContext";
import { RecipesContext } from "../contexts/RecipesContext";

type Props = { fixTime: React.Dispatch<React.SetStateAction<boolean>> };

const SelectTime: React.FC<Props> = (props) => {
  const { setTime, setInitialTime } = useContext(TimeContext);
  const { setRecipes } = useContext(RecipesContext);
  const [localTime, setLocalTime] = useState(30);

  const up = () => {
    const newLocalTime = localTime + 5;
    if (newLocalTime > 60) {
      return;
    } else {
      setLocalTime(newLocalTime);
    }
  };

  const down = () => {
    const newLocalTime = localTime - 5;
    if (newLocalTime < 5) {
      return;
    } else {
      setLocalTime(newLocalTime);
    }
  };

  const handle = (time: number) => {
    setTime(time);
    setInitialTime(time);
    setRecipes([]);
    props.fixTime(true);
  };

  return (
    <div className="wrap">
      <p>何分で作る?</p>
      <div className="timers">
        <button onClick={() => up()}>+</button>
        <div className="timer">{localTime}分</div>
        <button onClick={() => down()}>-</button>
      </div>
      <button onClick={() => handle(localTime)} className="btn-next">
        レシピを選ぶ
      </button>
      <style jsx>{`
        .wrap {
          text-align: center;
          font-weight: bold;
        }
        p {
          font-size: 30px;
          margin-bottom: 20px;
        }
        .timers {
          margin: 40px 0;
        }
        .timers > button {
          color: #ff9933;
          padding: 10px 15px;
          border-radius: 50%;
          border: 3px solid #ff9933;
        }
        .timer {
          margin: 15px;
          font-size: 40px;
        }
        .btn-next {
          font-size: 30px;
          padding: 10px;
          border-radius: 20px;
          border: 2px solid;
          font-size: 25px;
          border: 3px solid;
        }
      `}</style>
    </div>
  );
};

export default SelectTime;
