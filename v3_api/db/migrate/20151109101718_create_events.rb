class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :goal_id
      t.datetime :event_datetime

      t.timestamps null: false
    end
  end
end
