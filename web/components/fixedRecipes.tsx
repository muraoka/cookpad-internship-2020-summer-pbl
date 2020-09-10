import React from "react";
import { Recipe } from "../interfaces/recipe";

type Props = { recipes: Recipe[] };

const FixedRecipes: React.FC<Props> = (props) => {
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
          height: 90px;
          margin-bottom: 10px;
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
