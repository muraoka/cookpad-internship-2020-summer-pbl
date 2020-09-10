import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { RecipesContext } from "../contexts/RecipesContext";
import { Shokuzai, ShokuzaiResponse } from "../interfaces/shokuzai";
import { Recipe } from "../interfaces/recipe";
import FixedRecipes from "../components/fixedRecipes";
import ShokuzaiWithBox from "../components/shokuzaiWithBox";

async function fetchShokuzais(recipes: Recipe[]): Promise<ShokuzaiResponse> {
  let url = "http://localhost:8080/api/shokuzais";
  recipes.forEach((r, i) => {
    if (i === 0) {
      url += `?recipe_id[]=${r.id}`;
    } else {
      url += `&recipe_id[]=${r.id}`;
    }
  });
  const data = await fetch(url);
  return data.json();
}

function Shokuzais() {
  const { recipes } = useContext(RecipesContext);
  const [shokuzais, setShokuzais] = useState<Shokuzai[]>([]);

  useEffect(() => {
    const setShokuzaisToState = async () => {
      const result = await fetchShokuzais(recipes);
      setShokuzais(result);
    };
    setShokuzaisToState();
  }, []);

  return (
    <div>
      <div className="recipes">
        <FixedRecipes recipes={recipes} />
      </div>
      <p>必要な食材 (1人分)</p>
      <div className="shokuzais">
        {shokuzais.map((s) => (
          <ShokuzaiWithBox shokuzai={s} key={s.id} />
        ))}
      </div>
      <Link href="/recipes">
        <button>レシピを見る</button>
      </Link>
      <style jsx>{`
        div {
          text-align: center;
        }
        .shokuzais {
          margin-bottom: 20px;
        }
        p {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        button {
          font-size: 20px;
          padding: 10px;
          border-radius: 20px;
          color: #ff9933;
          border: 2px solid #ff9933;
        }
      `}</style>
    </div>
  );
}

export default Shokuzais;
