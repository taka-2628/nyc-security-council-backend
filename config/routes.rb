Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world' #route for testing

  resources :cameras
  resources :comments, except: [:index, :show]
  resources :neighborhoods, only: [:index]
  resources :types, only: [:index]
  resources :social_media_platforms, only: [:index]

end
