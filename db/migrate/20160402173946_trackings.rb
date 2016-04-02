class Trackings < ActiveRecord::Migration
  def change
  create_table :trackings do |t|
  t.string :guid
  t.string :url
  t.datetime :data
  end
  end
end
