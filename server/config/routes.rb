# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :recipes, only: ['index']
    resources :shokuzais, only: ['index']
  end
end
