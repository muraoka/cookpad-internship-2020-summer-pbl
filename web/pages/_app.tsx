import React from "react";
import { AppProps } from "next/app";
import { RecipesContextProvider } from "../contexts/RecipesContext";
import { TimeContextProvider } from "../contexts/TimeContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <TimeContextProvider>
      <RecipesContextProvider>
        <Component {...pageProps} />
      </RecipesContextProvider>
    </TimeContextProvider>
  );
}

export default App;
