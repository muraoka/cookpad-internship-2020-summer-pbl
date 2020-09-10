# frozen_string_literal: true

class Api::ShokuzaisController < ApplicationController
  def index
    return render json: {} unless params[:recipe_id]

    @shokuzais = Shokuzai.includes(:recipes).where(recipes: { id: params[:recipe_id] }).select('shokuzais.*, recipes_shokuzais.count')
    render json: @shokuzais
  end
end
