# frozen_string_literal: true

class RecipeShokuzai < ApplicationRecord
  self.table_name = 'recipes_shokuzais'

  belongs_to :recipe
  belongs_to :shokuzai
end
