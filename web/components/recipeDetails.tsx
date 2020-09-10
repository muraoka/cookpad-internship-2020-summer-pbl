import React from "react";
import { Recipe } from "../interfaces/recipe";

type Props = { recipe: Recipe };

const RecipeDetails: React.FC<Props> = (props) => {
  return (
    <div className="wrap">
      <div>
        <img src={props.recipe.img_url} />
      </div>
      <div className="texts">
        <p>{props.recipe.title}</p>
        <p>
          <a
            href={`https://cookpad.com/recipe/${props.recipe.cookpad_recipe_id}`}
            target="_blank"
            rel="noreferrer"
          >
            レシピを見る
          </a>
        </p>
      </div>
      <style jsx>{`
        div {
          text-align: left;
        }
        .wrap {
          display: flex;
          margin: 0 0 15px 0;
        }
        .texts {
          display: flex;
          flex-direction: column;
        }
        img {
          max-width: 100px;
        }
        p {
          font-size: 16px;
          font-weight: bold;
          margin: 10px;
        }
        a {
          padding: 6px;
          border-radius: 20px;
          color: #ff9933;
          border: 2px solid #ff9933;
        }
      `}</style>
    </div>
  );
};

export default RecipeDetails;
