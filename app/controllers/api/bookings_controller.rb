class Api::BookingsController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def index
    @bookings = Booking.where(guest_id: current_user.id)
  end

  def create
    # 1) I can make multiple bookings with the same start and end dates
    # 2) I can make bookings that overlap
    #
    # 1) find a way to check if the pending booking already exists in the booking table
    # 2) find a way to check if the pending booking has a start date that falls within
    #    any current booking time period or an end date that falls within any booking time period

    if valid_booking?(booking_params)
      @booking = Booking.new(booking_params)
      @booking.guest_id = current_user.id
      @booking.save

      render json: @booking
    else
      # render json: @booking.errors.full_messages, status: 422
      render json: ['Invalid booking'], status: 422
    end

  end

  # airbnb.com has no update booking functionality

  # def update
  #   @booking = current_user.bookings.find_by(id: params[:id])
  #
  #   if own_booking?
  #     @booking.update(booking_params)
  #     render 'api/bookings'
  #   else
  #     render json: @booking.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    p params
    p @booking
    own_booking = !!(current_user.id == @booking.guest_id)

    if own_booking
      @booking.destroy
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:guest_id, :listing_id, :start_date, :end_date)
  end

  # def valid_booking?(params)
  #   Booking.where(listing_id: params[:listing_id]).each do |booking|
  #     p params[:start_date]
  #     p booking.start_date.to_s
  #
  #     p params[:start_date].to_s < booking.start_date.to_s
  #
  #     return false if (params[:start_date] >= booking.start_date || params[:start_date] <= booking.end_date) &&
  #                     (params[:end_date] <= booking.end_date || params[:end_date] >= booking.start_date)
  #   end
  #
  #   return true
  # end

  def does_not_overlap?(params)

    Booking.where(listing_id: params[:listing_id]).each do |booking|

      if (!(params[:start_date].to_s >= booking.end_date.to_s || params[:end_date].to_s <= booking.start_date.to_s))
        return false
      end
    end

    return true
  end

  def valid_booking?(booking_params)

    # checks for empty strings
    if (booking_params[:start_date].empty? || booking_params[:end_date].empty?)
      return false
    # checks for start_date being before today's date
    elsif (booking_params[:start_date].to_date < Date.current)
      return false
    # checks for start_date being after end_date
    elsif (booking_params[:start_date].to_date > booking_params[:end_date].to_date)
      return false
    end

    return does_not_overlap?(booking_params)
  end

end
