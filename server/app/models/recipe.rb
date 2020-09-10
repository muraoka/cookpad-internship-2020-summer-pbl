# frozen_string_literal: true

class Recipe < ApplicationRecord
  has_many :recipes_shokuzais, class_name: 'RecipeShokuzai'
  has_many :shokuzais, through: :recipes_shokuzais
end
