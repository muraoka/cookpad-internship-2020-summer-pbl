import React from "react";
import { Recipe } from "../interfaces/recipe";
import Recipes from "../pages/recipes";

type Props = { recipes: Recipe[] };

const FixedRecipes: React.FC<Props> = (props) => {
  if (!props.recipes.length) {
    return (
      <div className="wrap">
        <div className="square">?</div>
        <style jsx>{`
          .wrap {
            height: 90px;
            margin-bottom: 10px;
          }
          .square {
            width: 70px;
            height: 70px;
            font-size: 50px;
            border: 2px dotted;
            border-radius: 50%;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="wrap">
      {props.recipes.map((r) => (
        <div key={r.id} className="img">
          <img src={r.img_url} />
          <p>{r.time}分</p>
        </div>
      ))}
      <style jsx>{`
        .wrap {
          display: flex;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .img {
          position: relative;
        }
        img {
          max-height: 80px;
          margin: 0 10px;
        }
        .img > p {
          font-size: 14px;
          position: absolute;
          top: 0px;
          left: -10px;
          padding: 8px;
          background: #fff;
          border: 2px solid;
          border-radius: 100px;
        }
      `}</style>
    </div>
  );
};

export default FixedRecipes;
