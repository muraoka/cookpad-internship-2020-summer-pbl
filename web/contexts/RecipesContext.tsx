import React, { createContext, useState } from "react";
import { Recipe } from "../interfaces/recipe";

type RecipesContextType = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

export const RecipesContext = createContext<RecipesContextType>({
  recipes: [],
  setRecipes: () => {},
});

export const RecipesContextProvider = ({ children }: any) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
