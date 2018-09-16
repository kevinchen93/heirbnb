class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.host_id = current_user.id
    if @listing.save
      render 'api/listings/show'
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    if @listing
      render 'api/listings/show'
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
    if @listing.destroy
      render 'api/listings/show'
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  private

  def listing_params
    params.require(:listing).permit(:host_id, :title, :description, :lat, :lng)
  end

  def own_listing?
    !!current_user.id == @listing.host_id
  end

end
