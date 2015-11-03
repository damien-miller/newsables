Rails.application.routes.draw do
  resources :posts
  root 'pages#front'

  resources :users
  resources :sessions
  delete 'logout' => 'sessions#destroy'
end
