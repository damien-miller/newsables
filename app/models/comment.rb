class Comment < ActiveRecord::Base
  acts_as_votable
  
  validates_presence_of :body, :author, :post

  belongs_to :post
  belongs_to :author, class_name: "User", foreign_key: "user_id"
end
