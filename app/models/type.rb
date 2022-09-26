class Type < ApplicationRecord

  has_many :camera_types

  has_many :cameras, through: :camera_types
  
end
