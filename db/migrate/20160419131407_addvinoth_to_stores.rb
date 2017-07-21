class AddvinothToStores < ActiveRecord::Migration
  def change
  	add_column :stores, :register_person, :string
    add_column :stores, :closed_person, :string
  end
end
