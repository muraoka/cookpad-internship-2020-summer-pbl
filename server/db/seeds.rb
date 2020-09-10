# frozen_string_literal: true

require 'csv'

CSV.foreach('./db/recipes.csv') do |row|
  Recipe.create(id: row[0], title: row[1], time: row[2], img_url: row[3], cookpad_recipe_id: row[4])
end

CSV.foreach('./db/shokuzais.csv') do |row|
  Shokuzai.create(id: row[0], name: row[1], unit: row[2])
end

CSV.foreach('./db/recipes_shokuzais.csv') do |row|
  RecipeShokuzai.create(id: row[0], recipe_id: row[1], shokuzai_id: row[2], count: row[3])
end
