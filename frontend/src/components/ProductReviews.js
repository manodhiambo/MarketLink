import React from 'react';
import ReviewForm from './ReviewForm';
import RatingStars from './RatingStars';

const ProductReviews = ({ reviews, onSubmitReview }) => {
	  return (
		      <div className="product-reviews">
		        <h3>Customer Reviews</h3>
		        {reviews.length === 0 ? (
				        <p>No reviews yet.</p>
				      ) : (
					              reviews.map((review) => (
							                <div key={review.id} className="review">
							                  <RatingStars rating={review.rating} />
							                  <p>{review.review}</p>
							                </div>
							              ))
					            )}
		        <ReviewForm onSubmit={onSubmitReview} />
		      </div>
		    );
};

export default ProductReviews;
