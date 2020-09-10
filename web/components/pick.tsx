import React, { useState, useContext, useEffect } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import { Recipe, RecipesResponse } from "../interfaces/recipe";
import { TimeContext } from "../contexts/TimeContext";
import { RecipesContext } from "../contexts/RecipesContext";

async function fetchRecipes(
  time_max: number,
  excludes?: number[]
): Promise<RecipesResponse> {
  const data = await fetch(
    `//localhost:8080/api/recipes${buildQuery(time_max, excludes)}`
  );
  return data.json();
}

function buildQuery(time_max: number, excludes?: number[]): string {
  let query = `?time_max=${time_max}&rand=1`;
  if (excludes) {
    excludes.forEach((e) => {
      query += `&exclude[]=${e}`;
    });
  }

  return query;
}

function Pick() {
  const router = useRouter();
  const { recipes, addRecipe } = useContext(RecipesContext);
  const { time, initialTime, setTime } = useContext(TimeContext);
  const [index, setIndex] = useState(0);
  const [excludes, setExcludes] = useState<number[]>([]);
  const [recipeCandidates, setRecipeCandidates] = useState<Recipe[]>([]);

  useEffect(() => {
    const setCandidates = async () => {
      const result = await fetchRecipes(time, excludes);
      setRecipeCandidates(result);
    };

    setCandidates();
  }, [time]);

  function cook(recipeCandidate: Recipe) {
    addRecipe(recipeCandidate);
    const nextTime = time - recipeCandidate.time;
    if (nextTime <= 0) {
      router.push("/shokuzais");
    }

    const newExcludes = excludes;
    newExcludes.push(recipeCandidate.id);
    setExcludes(newExcludes);
    setIndex(0);
    setTime(nextTime);
  }

  function nope(recipeCandidate: Recipe) {
    const newExcludes = excludes;
    newExcludes.push(recipeCandidate.id);
    setExcludes(newExcludes);
    setIndex(index + 1);
  }

  function done() {
    if (!recipes.length) {
      window.alert("レシピを選んでください");
    } else {
      router.push("/shokuzais");
    }
  }

  if (!recipeCandidates) return <div>レシピが見つかりませんでした</div>;

  return (
    <>
      <div>指定済:{recipes ? recipes.map((r) => `${r.title} `) : ""}</div>
      <div>
        あと{time}/{initialTime}分
      </div>
      <div>
        <img src={recipeCandidates[index]?.img_url} />
      </div>
      <div>
        {recipeCandidates[index]?.title}: {recipeCandidates[index]?.time}分
      </div>
      <button onClick={() => nope(recipeCandidates[index])}>NOPE</button>
      <button onClick={() => cook(recipeCandidates[index])}>COOK</button>
      <button onClick={() => done()}>DONE</button>
    </>
  );
}

export default Pick;
