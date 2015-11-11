class Api::V1::PostSerializer < ActiveModel::Serializer
  attributes :title, :tags

  belongs_to :user
end