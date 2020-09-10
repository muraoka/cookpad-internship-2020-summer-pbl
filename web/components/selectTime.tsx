import React, { useContext } from "react";
import { TimeContext } from "../contexts/TimeContext";

type Props = { fixTime: React.Dispatch<React.SetStateAction<boolean>> };

const SelectTime: React.FC<Props> = (props) => {
  const { setTime } = useContext(TimeContext);
  const selectTime = (time: number) => {
    setTime(time);
    props.fixTime(true);
  };

  return (
    <>
      <div>何分で作る?</div>
      {[15, 30, 45].map((t) => {
        return (
          <button key={t} onClick={() => selectTime(t)}>
            {t}分
          </button>
        );
      })}
    </>
  );
};

export default SelectTime;
