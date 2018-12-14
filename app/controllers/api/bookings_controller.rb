class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index
    @bookings = Booking.includes(:listing)
                       .where(guest_id: current_user.id)
                       .order(start_date: :asc)

    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end

  end

  def destroy
    @booking = current_user.bookings.find_by(id: params[:id])
    @booking.destroy

    render :show
  end

  private

  def booking_params
    params.require(:booking).permit(
      :guest_id,
      :listing_id,
      :start_date,
      :end_date,
      :num_guests)
  end

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
