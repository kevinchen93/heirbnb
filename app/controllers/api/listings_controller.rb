class Api::ListingsController < ApplicationController
  def index
    if params[:city].is_a?(Array)
      @listings_hash = {}
      params[:city].each do |city|
        @listings_hash[city] = Listing.where(city: city).with_attached_photos
      end

      render :splash_listings
    else
      if bounds
        @listings = Listing.in_bounds(bounds).with_attached_photos
      else
        @listings = Listing.all.with_attached_photos
      end

      render :index
    end
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.host_id = current_user.id

    if @listing.save
      render json: { message: "Listing successfully posted!" }
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def show
    @listing = Listing.includes(:reviews).find_by(id: params[:id])

    if @listing
      render :show
    else
      render json:['Listing could not be found'], status: 404
    end
  end

  def update
    @listing = current_user.listings.find_by(id: params[:id])

    if own_listing?
      @listing.update(listing_params)
      render 'api/listings/show'
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])
    own_listing = !!(current_user.id == @listing.host_id)

    if own_listing
      @listing.destroy
      render 'api/listings/show'
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  private

  def listing_params
    params.require(:listing).permit(
      :host_id,
      :title,
      :description,
      :lat,
      :lng,
      :guests, :bedrooms, :baths, :beds, :prices,
      :img_url,
      :address,
      :city,
      :state,
      :country,
      :zip_code,
      :air_conditioning,
      :coffee_maker,
      :bathroom_essentials,
      :indoor_fireplace,
      :first_aid_kit,
      :free_parking,
      :game_console,
      :gym,
      :kitchen,
      :hair_dryer,
      :heating,
      :iron,
      :laptop_friendly_workspace,
      :patio,
      :refrigerator,
      :tv,
      :washer,
      :wifi,
      :self_check_in
    )
  end

  def own_listing?
    !!(current_user.id == @listing.host_id)
  end

  def bounds
    params[:bounds]
  end

end
