class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :name
      t.string :father_name
      t.date :open_date
      t.date :end_date
      t.integer :amount
      t.string :address
      t.string :status

      t.timestamps
    end
  end
end
