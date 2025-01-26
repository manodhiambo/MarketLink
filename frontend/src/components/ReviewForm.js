import React, { useState } from 'react';
import RatingStars from './RatingStars';

const ReviewForm = ({ productId, onSubmit }) => {
	  const [review, setReview] = useState('');
	  const [rating, setRating] = useState(0);

	  const handleReviewChange = (e) => {
		      setReview(e.target.value);
		    };

	  const handleRatingChange = (newRating) => {
		      setRating(newRating);
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();
		      onSubmit({ productId, review, rating });
		    };

	  return (
		      <form onSubmit={handleSubmit}>
		        <label>Review</label>
		        <textarea
		          value={review}
		          onChange={handleReviewChange}
		          placeholder="Write your review here"
		        />
		        <div className="rating">
		          <RatingStars rating={rating} />
		          <button type="button" onClick={() => handleRatingChange(rating + 1)}>
		            Rate {rating + 1}
		          </button>
		        </div>
		        <button type="submit">Submit Review</button>
		      </form>
		    );
};

export default ReviewForm;
