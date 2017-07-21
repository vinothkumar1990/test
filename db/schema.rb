# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160803123650) do

  create_table "articles", force: true do |t|
    t.string   "name"
    t.string   "father_name"
    t.date     "open_date"
    t.date     "end_date"
    t.integer  "amount"
    t.string   "address"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "books", force: true do |t|
    t.string   "book_name"
    t.integer  "amount"
    t.integer  "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "stores", force: true do |t|
    t.string   "jewele_no"
    t.string   "member_no"
    t.string   "name"
    t.string   "sex"
    t.string   "father_name"
    t.string   "gender"
    t.date     "loan_date"
    t.string   "gold_description"
    t.integer  "gold_total"
    t.integer  "gold_cross_weight"
    t.integer  "gold_net_weight"
    t.integer  "total_amount"
    t.integer  "loan_amount"
    t.string   "status"
    t.date     "loan_close_date"
    t.integer  "closing_amount"
    t.string   "address"
    t.integer  "mobile"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "interest_rate"
    t.integer  "duration_amount"
    t.string   "total_interest"
    t.string   "register_person"
    t.string   "closed_person"
  end

  create_table "tests", force: true do |t|
    t.string   "title"
    t.text     "text"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true

end
