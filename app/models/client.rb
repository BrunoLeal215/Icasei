class Client < ActiveRecord::Base

validates :nome, :email, presence: true
	
end