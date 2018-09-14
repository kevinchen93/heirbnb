class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.where(guest_id: current_user.id)
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      @bookings = Booking.where(guest_id: current_user.id)
      render 'api/bookings'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    if @booking.destroy
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:guest_id, :listing_id, :start_date, :end_date)
  end
end
