class AddsampleToTests < ActiveRecord::Migration
  def change
  	remove_column :tests, :email, :string
  end
end
