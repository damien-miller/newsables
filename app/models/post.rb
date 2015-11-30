class Post < ActiveRecord::Base
  acts_as_taggable
  acts_as_votable

  validates :title, length: { in: 5..100 }, uniqueness: true
  validates :body, presence: true

  belongs_to :author, class_name: "User", foreign_key: "user_id"

  has_many :comments, dependent: :destroy

end
