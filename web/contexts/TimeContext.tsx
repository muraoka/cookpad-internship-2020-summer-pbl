import React, { createContext, useState } from "react";

type TimeContextType = {
  time: number;
  initialTime: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setInitialTime: React.Dispatch<React.SetStateAction<number>>;
};

export const TimeContext = createContext<TimeContextType>({
  time: 0,
  initialTime: 0,
  setTime: () => {},
  setInitialTime: () => {},
});

export const TimeContextProvider = ({ children }: any) => {
  const [time, setTime] = useState(30);
  const [initialTime, setInitialTime] = useState(0);

  return (
    <TimeContext.Provider
      value={{ time, initialTime, setTime, setInitialTime }}
    >
      {children}
    </TimeContext.Provider>
  );
};
