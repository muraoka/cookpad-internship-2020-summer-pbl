import React from "react";
import { Recipe } from "../interfaces/recipe";

type Props = { recipe: Recipe };

const RecipeDetails: React.FC<Props> = (props) => {
  return (
    <div className="wrap">
      <div className="img">
        <img src={props.recipe.img_url} />
        <p>{props.recipe.time}分</p>
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
        .img {
          position: relative;
        }
        .img > p {
          font-size: 20px;
          position: absolute;
          top: 0px;
          left: -10px;
          padding: 8px;
          background: #fff;
          border: 3px solid;
          border-radius: 100px;
        }
        img {
          max-width: 160px;
        }
        .texts > p {
          font-size: 20px;
          font-weight: bold;
          margin: 10px;
        }
        a {
          padding: 10px;
          border-radius: 20px;
          color: #ff9933;
          border: 2px solid #ff9933;
        }
      `}</style>
    </div>
  );
};

export default RecipeDetails;
