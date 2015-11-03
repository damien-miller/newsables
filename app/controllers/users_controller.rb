class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  before_action :check_ownership, only: [:show]

  def new
    @user = User.new    
  end

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_url, notice: "You're in!"
    else
      flash.now.alert = "Re-check da fields!"
      render "new"
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end 

  def set_user
    @user = User.find(params[:id])
  end

  def check_ownership
    redirect_to root_path unless @user == current_user
  end
end
