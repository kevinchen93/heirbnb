class Api::BookingsController < ApplicationController
  before_action :require_logged_in, except: [:index]

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

  def update
    @booking = current_user.bookings.find_by(id: params[:id])
    if @booking.update(booking_params)
      render 'api/bookings'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    if own_booking?
      @booking.destroy
      render 'api/bookings'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def own_booking?
    !!current_user.id == @booking.guest_id
  end

  def booking_params
    params.require(:booking).permit(:guest_id, :listing_id, :start_date, :end_date)
  end
end
