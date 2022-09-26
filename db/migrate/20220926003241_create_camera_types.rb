class CreateCameraTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :camera_types do |t|
      t.integer :camera_id
      t.integer :type_id
    end
  end
end
