class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def index
    listing = Listing.find_by_id(params[:listing_id])
    @reviews = listings.reviews

    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])

    if own_review?
      @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])

    if own_review?
      @review.destroy
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :booking_id,
      :reviewer_id,
      :body,
      :rating,
      :accuracy,
      :communication,
      :cleanliness,
      :location,
      :check_in,
      :value
    )
  end

  def own_review?
    !!(current_user.id == @review.reviewer_id)
  end

end
