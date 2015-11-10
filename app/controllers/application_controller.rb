class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def require_authenticate
    redirect_to new_session_path unless current_user
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user
  
end
