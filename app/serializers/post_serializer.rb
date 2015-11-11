class PostSerializer < ActiveModel::Serializer
  attributes :title

  belongs_to :author
end