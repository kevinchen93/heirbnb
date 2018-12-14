class Api::UsersController < ApplicationController
  def index
    @users = User.find_by_id(params[:id]).with_attached_photo
    render :show
  end

  def show
    @user = User.find_by(id: params[:id])
    @listings = @user.listings.with_attached_photos
    @bookings = @user.bookings
    @reviews = @user.reviews

    if @user
      render 'api/users/show'
    else
      render json: ['User could not be found'], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    @user.profile_photo.attach(io: File.open('app/assets/images/demo.jpg'), filename: 'demo.jpg')
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :first_name,
      :last_name,
      :password,
      :profile_photo)
  end

end
