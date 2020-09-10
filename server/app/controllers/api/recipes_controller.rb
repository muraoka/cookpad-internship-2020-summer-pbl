# frozen_string_literal: true

class Api::RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    recipes = recipes.where(time: ..params[:time_max]) if params[:time_max]
    recipes = recipes.where.not(id: params[:exclude]) if params[:exclude]

    @recipes = recipes
    render json: @recipes
  end
end
