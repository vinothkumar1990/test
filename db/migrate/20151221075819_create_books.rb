class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :book_name
      t.integer :amount
      t.integer :phone

      t.timestamps
    end
  end
end
