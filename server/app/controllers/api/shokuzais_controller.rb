# frozen_string_literal: true

class Api::ShokuzaisController < ApplicationController
  def index
    shokuzais = Shokuzai.all
    if params[:recipe_id]
      shokuzais = Shokuzai.includes(:recipes).where(recipes: { id: params[:recipe_id] }).select('shokuzais.*, recipes_shokuzais.count')
    end
    @shokuzais = shokuzais
    render json: @shokuzais
  end
end
