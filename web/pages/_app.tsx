import React from "react";
import { AppProps } from "next/app";
import { RecipesContextProvider } from "../contexts/RecipesContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecipesContextProvider>
      <Component {...pageProps} />
    </RecipesContextProvider>
  );
}

export default App;
