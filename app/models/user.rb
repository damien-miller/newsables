class User < ActiveRecord::Base
  has_secure_password

  validates_presence_of :email, :name
  validates_uniqueness_of :email, :name
  validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :name, length: { in: 2..15 }

  has_many :posts
  has_many :comments
end
