class RemoveNullConstraintsFromReviewColumns < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, "accuracy", true
    change_column_null :reviews, "communication", true
    change_column_null :reviews, "cleanliness", true
    change_column_null :reviews, "location", true
    change_column_null :reviews, "check_in", true
    change_column_null :reviews, "value", true
  end
end
