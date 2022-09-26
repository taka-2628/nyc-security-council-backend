class Camera < ApplicationRecord

  belongs_to :neighborhood
  belongs_to :user

  has_many :comments
  has_many :camera_types

  has_many :types, through: :camera_types

end
