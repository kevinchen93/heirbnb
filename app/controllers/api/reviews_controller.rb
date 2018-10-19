class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    p @review
    @review.reviewer_id = current_user.id
    p @review
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find_by(id: params[:id])

    if @review
      render 'api/reviews/show'
    else
      render json:['Review could not be found'], status: 404
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
    params.require(:review).permit(:booking_id, :reviewer_id, :body, :rating)
  end

  def own_review?
    !!(current_user.id == @review.reviewer_id)
  end

end
