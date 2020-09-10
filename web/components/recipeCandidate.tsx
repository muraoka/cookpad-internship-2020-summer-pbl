import React from "react";
import { Recipe } from "../interfaces/recipe";

type Props = {
  recipe: Recipe;
  nope: { (recipe: Recipe): void };
  cook: { (recipe: Recipe): void };
  done: { (): void };
};

const RecipeCandidate: React.FC<Props> = (props) => {
  if (!props.recipe) {
    return <></>;
  }

  return (
    <div>
      <div className="img">
        <img src={props.recipe.img_url} />
        <p>{props.recipe.time}分</p>
      </div>
      <p className="title">{props.recipe.title}</p>
      <div className="btns">
        <div className="btn-which">
          <button onClick={() => props.nope(props.recipe)} className="btn-nope">
            また今度
          </button>
          <button onClick={() => props.cook(props.recipe)} className="btn-cook">
            {`　作る　`}
          </button>
        </div>
        <button onClick={() => props.done()} className="btn-done">
          献立を決定する
        </button>
      </div>
      <style jsx>{`
        .img {
          text-align: center;
          position: relative;
        }
        .img > p {
          font-size: 30px;
          position: absolute;
          top: 0px;
          left: 5px;
          padding: 8px;
          background: #fff;
          border: 2px solid;
          border-radius: 100px;
        }
        img {
          max-width: 100%;
          max-height: 300px;
        }
        p {
          font-size: 20px;
          font-weight: bold;
        }
        .btns {
          margin: 20px 0 0 0;
        }
        .btn-which {
          display: flex;
          justify-content: space-around;
          font-weight: bold;
          margin-bottom: 20px;
          color: white;
        }
        button {
          font-size: 30px;
          padding: 10px;
          border-radius: 20px;
        }
        .btn-nope {
          background: blue;
        }
        .btn-cook {
          background: #ff9933;
        }
        .btn-done {
          background: #c0c0c0;

          font-size: 25px;
        }
      `}</style>
    </div>
  );
};

export default RecipeCandidate;
