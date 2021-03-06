Rails.application.routes.draw do

  resources :posts do
    get 'like_it' => "posts#like"
    get 'comment_it' => "posts#add_comment"
  end
  resources :comments do
    get 'reply' => "comments#render_reply_form"
    post 'send_reply' => "comments#reply"
  end

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
