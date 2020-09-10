import React from "react";
import { Recipe } from "../interfaces/recipe";

type Props = { recipes: Recipe[] };

const FixedRecipes: React.FC<Props> = (props) => {
  return (
    <div className="wrap">
      {props.recipes.map((r) => (
        <div key={r.id}>
          <img src={r.img_url} />
        </div>
      ))}
      <style jsx>{`
        .wrap {
          display: flex;
          height: 90px;
          margin-bottom: 10px;
        }
        img {
          max-height: 80px;
          margin: 0 10px;
        }
      `}</style>
    </div>
  );
};

export default FixedRecipes;
