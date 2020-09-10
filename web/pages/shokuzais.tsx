import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RecipesContext } from "../contexts/RecipesContext";
import { Shokuzai, ShokuzaiResponse } from "../interfaces/shokuzai";
import { Recipe } from "../interfaces/recipe";

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
  const router = useRouter();
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);
  const [shokuzais, setShokuzais] = useState<Shokuzai[]>([]);

  useEffect(() => {
    const setShokuzaisToState = async () => {
      const result = await fetchShokuzais(recipes);
      setShokuzais(result);
    };
    setShokuzaisToState();
  }, []);

  return (
    <>
      <div>必要な食材</div>
      <div>
        {shokuzais.map((s) => (
          <div key={s.id}>
            {s.name}: {s.count + s.unit}
          </div>
        ))}
      </div>
      <button onClick={() => router.push("/recipes")}>レシピを見る</button>
    </>
  );
}

export default Shokuzais;
