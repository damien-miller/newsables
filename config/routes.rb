Rails.application.routes.draw do
  resources :posts
  get 'search_posts' => "posts#render_search_popup"
  root 'pages#front'

  resources :users
  resources :sessions
  delete 'logout' => 'sessions#destroy'
end
