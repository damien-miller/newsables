class PagesController < ApplicationController
  def front
    @posts = Post.order("created_at DESC")
  end
end
