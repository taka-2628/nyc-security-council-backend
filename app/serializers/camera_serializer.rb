class CameraSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :geometry, :address, :intersection, :zipcode, :borough, :description, :owner

  belongs_to :neighborhood
  belongs_to :user, serializer: CommentUserSerializer
  has_many :comments
  has_many :types
end
