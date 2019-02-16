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

ActiveRecord::Schema.define(version: 2019_02_16_022333) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "guest_id", null: false
    t.integer "listing_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_guests", null: false
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["listing_id"], name: "index_bookings_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "guests", default: 1, null: false
    t.integer "bedrooms", default: 1, null: false
    t.integer "beds", default: 1, null: false
    t.integer "baths", default: 1, null: false
    t.integer "prices", default: 1, null: false
    t.string "img_url", default: "", null: false
    t.float "lat"
    t.float "lng"
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.string "zip_code", null: false
    t.boolean "air_conditioning", null: false
    t.boolean "coffee_maker", null: false
    t.boolean "bathroom_essentials", null: false
    t.boolean "indoor_fireplace", null: false
    t.boolean "first_aid_kit", null: false
    t.boolean "free_parking", null: false
    t.boolean "game_console", null: false
    t.boolean "gym", null: false
    t.boolean "kitchen", null: false
    t.boolean "hair_dryer", null: false
    t.boolean "heating", null: false
    t.boolean "iron", null: false
    t.boolean "laptop_friendly_workspace", null: false
    t.boolean "patio", null: false
    t.boolean "refrigerator", null: false
    t.boolean "tv", null: false
    t.boolean "washer", null: false
    t.boolean "wifi", null: false
    t.boolean "self_check_in", null: false
    t.index ["city"], name: "index_listings_on_city"
    t.index ["country"], name: "index_listings_on_country"
    t.index ["host_id"], name: "index_listings_on_host_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "booking_id", null: false
    t.integer "reviewer_id", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "accuracy"
    t.integer "communication"
    t.integer "cleanliness"
    t.integer "location"
    t.integer "check_in"
    t.integer "value"
    t.integer "listing_id", null: false
    t.index ["booking_id", "reviewer_id"], name: "index_reviews_on_booking_id_and_reviewer_id", unique: true
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
