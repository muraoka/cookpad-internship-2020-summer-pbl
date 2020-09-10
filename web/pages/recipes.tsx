import React, { useContext } from "react";
import { RecipesContext } from "../contexts/RecipesContext";
import { TimeContext } from "../contexts/TimeContext";

function Recipes() {
  const { recipes } = useContext(RecipesContext);
  const { initialTime, time } = useContext(TimeContext);
  const cookingTime = initialTime - time;

  return (
    <>
      <div>{cookingTime}分で作る今日の献立</div>
      {recipes.map((r) => (
        <div key={r.id}>
          <div>
            <img src={r.img_url} />
            {r.title}
            <a href={`https://cookpad.com/recipe/${r.cookpad_recipe_id}`}>
              レシピを見る
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Recipes;
