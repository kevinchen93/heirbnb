class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
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
    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:booking_id, :reviewer_id, :body, :rating)
  end

end
