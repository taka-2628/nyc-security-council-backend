class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.integer :neighborhood_id
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :fullname
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :state
      t.string :zipcode
      t.date :data_of_birth
      t.string :gender
      t.string :occupation
      t.string :citizenship
      t.string :sns
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
