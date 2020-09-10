export type Recipe = {
  id: number;
  title: string;
  time: number;
  img_url: string;
};

export type RecipesResponse = Recipe[];
