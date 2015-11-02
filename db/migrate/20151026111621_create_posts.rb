class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.string :tags
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
