export type Recipe = {
  id: number;
  title: string;
  time: number;
  img_url: string;
  cookpad_recipe_id: number;
};

export type RecipesResponse = Recipe[];
