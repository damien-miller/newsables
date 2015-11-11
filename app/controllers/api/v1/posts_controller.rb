class Api::V1::PostsController < Api::V1::BaseController

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
  	@post = Post.find(params[:id])
  	render json: @post
  end

end