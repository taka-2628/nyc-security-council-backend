class Camera < ApplicationRecord

  belongs_to :neighborhood
  belongs_to :user

  has_many :comments
  has_many :camera_types

  has_many :types, through: :camera_types

  validates :user_id, presence: true
  validates :neighborhood_id, presence: true
  validates :image_url, presence: true
  validates :description, length: { maximum: 150 }

end
