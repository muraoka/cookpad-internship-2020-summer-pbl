import React, { createContext, useReducer } from "react";
import { Recipe } from "../interfaces/recipe";

type RecipesContextType = {
  recipes: Recipe[];
  addRecipe: React.Dispatch<Recipe>;
};

export const RecipesContext = createContext<RecipesContextType>({
  recipes: [],
  addRecipe: () => {},
});

function reducer(state: Recipe[], action: Recipe) {
  state.push(action);
  return state;
}

export const RecipesContextProvider = ({ children }: any) => {
  const [recipes, addRecipe] = useReducer(reducer, []);

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};
