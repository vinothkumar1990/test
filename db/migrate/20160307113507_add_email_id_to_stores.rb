class AddEmailIdToStores < ActiveRecord::Migration
  def change
    add_column :stores, :interest_rate, :integer
    add_column :stores, :duration_amount, :integer
    add_column :stores, :total_interest, :string
  end
end
