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

  def show
    @email = Email.find(params[:id])
    
  end

  private

  def email_params
    params.require(:email).permit(:id, :subject, :body)
  end

end
