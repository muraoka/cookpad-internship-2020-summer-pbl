import React, { useState, useContext, useEffect } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import { Recipe, RecipesResponse } from "../interfaces/recipe";
import { TimeContext } from "../contexts/TimeContext";
import { RecipesContext } from "../contexts/RecipesContext";
import FixedRecipes from "../components/fixedRecipes";
import RecipeCandidate from "../components/recipeCandidate";

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
  const { recipes, setRecipes } = useContext(RecipesContext);
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

  const addRecipe = (recipe: Recipe) => {
    const newRecipes = recipes;
    newRecipes.push(recipe);
    setRecipes(newRecipes);
  };

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

  if (!recipeCandidates) return <></>;

  return (
    <div>
      <FixedRecipes recipes={recipes} />
      <p>
        残り{time}/{initialTime}分
      </p>
      <RecipeCandidate
        recipe={recipeCandidates[index]}
        nope={nope}
        cook={cook}
        done={done}
      />
      <style jsx>{`
        div {
          text-align: center;
        }
        p {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Pick;
