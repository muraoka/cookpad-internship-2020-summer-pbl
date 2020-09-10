import React, { useContext } from "react";
import { RecipesContext } from "../contexts/RecipesContext";

function Recipes() {
  const { recipes } = useContext(RecipesContext);

  return (
    <>
      <div>今日の献立</div>
      <div>{recipes.map((r) => `${r.title} `)}</div>
    </>
  );
}

export default Recipes;
