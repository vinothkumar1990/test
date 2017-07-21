class Article < ActiveRecord::Base
	
	
	validates :member_no, uniqueness: true
end
