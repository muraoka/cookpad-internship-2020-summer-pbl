# frozen_string_literal: true

class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render json: @recipes
  end
end
