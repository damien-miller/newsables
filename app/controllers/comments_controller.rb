class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :require_authenticate, except: [:show]
  before_action :check_ownership, only: [:edit]

  def new
    @comment = Comment.new
  end

  def edit
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user
    respond_to do |format|
      if @comment.save
        format.js
      else
        # do nothing
      end
    end
    
  end

  def render_reply_form
    @comment = Comment.find(params[:comment_id])
    @post = Post.find(params[:post_id])
  end

  def reply
    @comment = Comment.find(params[:comment_id])
    @reply = @comment.children.new(comment_params)
    @reply.author = current_user
    @reply.post = Post.find(params[:post_id])

    @reply.save
  end

# def update
#    respond_to do |format|
#      if @comment.update(post_params)
#        format.html { redirect_to @comment, notice: 'Post was successfully updated.' }
#        format.json { render :show, status: :ok, location: @comment }
#     else
#        format.html { render :edit }
#       format.json { render json: @comment.errors, status: :unprocessable_entity }
#     end
#    end
#  end

  def destroy
    respond_to do |format|
      if @comment.destroy
        format.js
      else
        # do nothing
      end
    end
  end

#  def like
#    @comment = Comment.find(params[:post_id])
#    @user = current_user
#    @comment.liked_by @user
# end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

  def check_ownership
    redirect_to root_path unless @comment.author == current_user
  end
end
