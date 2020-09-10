import React, { useContext } from "react";
import { TimeContext } from "../contexts/TimeContext";
import { RecipesContext } from "../contexts/RecipesContext";

type Props = { fixTime: React.Dispatch<React.SetStateAction<boolean>> };

const SelectTime: React.FC<Props> = (props) => {
  const { setTime, setInitialTime } = useContext(TimeContext);
  const { setRecipes } = useContext(RecipesContext);
  const handle = (time: number) => {
    setTime(time);
    setInitialTime(time);
    setRecipes([]);
    props.fixTime(true);
  };

  return (
    <div>
      <p>何分で作る?</p>
      <div className="buttons">
        {[15, 30, 45].map((t) => {
          return (
            <button key={t} onClick={() => handle(t)}>
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
