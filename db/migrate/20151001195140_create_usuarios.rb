class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
      t.string :user
      t.string :pass

      t.timestamps null: false
    end
  end
end
