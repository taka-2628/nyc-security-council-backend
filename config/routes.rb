Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world' #route for testing

  resources :cameras
  resources :comments, except: [:index, :show]
  resources :neighborhoods, only: [:index]
  resources :social_media_platforms, only: [:index]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
