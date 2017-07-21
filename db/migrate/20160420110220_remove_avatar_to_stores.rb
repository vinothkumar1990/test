class RemoveAvatarToStores < ActiveRecord::Migration
  def change
    remove_column :stores, :avatar, :string
  end
end
