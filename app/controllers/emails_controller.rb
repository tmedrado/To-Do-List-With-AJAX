require 'faker'
class EmailsController < ApplicationController

  def index
    @emails = Email.all
  end

  def create
    @email = Email.new
    @email.subject = Faker::Book.title
    @email.body = Faker::Company.bs
    if @email.save
      respond_to do |format|
        format.html { redirect_to emails_path }
        format.js {}
      end
    end

  
  end

end
