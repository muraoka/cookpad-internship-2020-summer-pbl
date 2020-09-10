# frozen_string_literal: true

class Api::ShokuzaisController < ApplicationController
  def index
    @shokuzais = Shokuzai.all
    render json: @shokuzais
  end
end
