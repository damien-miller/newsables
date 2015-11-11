Rails.application.routes.draw do
  resources :posts
  get 'search_posts' => "posts#render_search_popup"
  root 'pages#front'

  resources :users
  resources :sessions
  delete 'logout' => 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show]
      resources :users, only: [:index, :show]
    end
  end

end
