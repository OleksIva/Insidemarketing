import React from 'react';
import './RatingScale.scss';

const RatingScale = ({ rating }) => {
  // Assuming rating is a number between 0 and 10
  const ratingPercentage = (rating / 10) * 100; // Convert to percentage for the CSS width

  return (
    <div className="rating-scale">
      <div className="rating-scale__bar" style={{ width: `${ratingPercentage}%` }}></div>
      <div className="rating-scale__value">{rating}</div>
    </div>
  );
};

export default RatingScale;
