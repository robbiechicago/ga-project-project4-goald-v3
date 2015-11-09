class Goal < ActiveRecord::Base

  has_many :users, through: :events

end
