class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :more_less
      t.string :category
      t.string :goal_thing
      t.string :icon_url
      t.boolean :is_public

      t.timestamps null: false
    end
  end
end
