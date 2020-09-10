import React, { createContext, useState } from "react";

type TimeContextType = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

export const TimeContext = createContext<TimeContextType>({
  time: 0,
  setTime: () => {},
});

export const TimeContextProvider = ({ children }: any) => {
  const [time, setTime] = useState(30);

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};
