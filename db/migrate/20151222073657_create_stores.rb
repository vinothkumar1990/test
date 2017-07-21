class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.string :jewele_no
      t.string :member_no
      t.string :name
      t.string :sex
      t.string :father_name
      t.string :gender
      t.date :loan_date
      t.string :gold_description
      t.integer :gold_total
      t.integer :gold_cross_weight
      t.integer :gold_net_weight
      t.integer :total_amount
      t.integer :loan_amount
      t.string :status
      t.date :loan_close_date
      t.integer :closing_amount
      t.string :address
      t.integer :mobile

      t.timestamps
    end
  end
end
