class AddvinoToStores < ActiveRecord::Migration
  def change
  	add_column :stores, :avatar, :string
  end
end
