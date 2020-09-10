import React, { useContext } from "react";
import { RecipesContext } from "../contexts/RecipesContext";
import { TimeContext } from "../contexts/TimeContext";
import RecipeDetails from "../components/recipeDetails";

function Recipes() {
  const { recipes } = useContext(RecipesContext);
  const { initialTime, time } = useContext(TimeContext);
  const cookingTime = initialTime - time;

  // TODO: 直接 /recipes　にアクセスしたときのハンドリング
  if (!recipes.length) {
    return <></>;
  }

  return (
    <div>
      <p>{cookingTime}分で作る今日の献立</p>
      {recipes.map((r) => (
        <RecipeDetails key={r.id} recipe={r} />
      ))}
      <style jsx>{`
        div {
          text-align: center;
        }
        p {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default Recipes;
