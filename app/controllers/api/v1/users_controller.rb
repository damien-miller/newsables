class Api::V1::UsersController < Api::V1::BaseController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render(json: Api::V1::UserSerializer.new(user).to_json)
  end

end