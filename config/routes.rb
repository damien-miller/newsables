Rails.application.routes.draw do
  resources :posts
  root 'pages#index'

  resources :users
  resources :sessions
  delete 'logout' => 'sessions#destroy'
end
