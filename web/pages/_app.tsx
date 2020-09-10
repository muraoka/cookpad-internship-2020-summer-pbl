import React from "react";
import { AppProps } from "next/app";
import "ress";
import { RecipesContextProvider } from "../contexts/RecipesContext";
import { TimeContextProvider } from "../contexts/TimeContext";
import Layout from "../components/layouts";

function App({ Component, pageProps }: AppProps) {
  return (
    <TimeContextProvider>
      <RecipesContextProvider>
        <Layout>
          <Component {...pageProps} />
          <style global jsx>{`
            body {
              background: #fff;
              color: #222;
              font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
                Segoe UI, Hiragino Kaku Gothic ProN, Hiragino Sans,
                ヒラギノ角ゴ ProN W3, Arial, メイリオ, Meiryo, sans-serif;
            }
          `}</style>
        </Layout>
      </RecipesContextProvider>
    </TimeContextProvider>
  );
}

export default App;
