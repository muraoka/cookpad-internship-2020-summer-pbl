# frozen_string_literal: true

class Shokuzai < ApplicationRecord
  has_many :recipes_shokuzais, class_name: 'RecipeShokuzai'
  has_many :recipes, through: :recipes_shokuzais
end
