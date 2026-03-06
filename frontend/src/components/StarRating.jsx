import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={14} fill="#FFB800" stroke="#FFB800" />
      ))}
      {hasHalfStar && <StarHalf key="half" size={14} fill="#FFB800" stroke="#FFB800" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={14} fill="none" stroke="#D1D5DB" />
      ))}
      <span className="rating-num">{rating}</span>
    </div>
  );
};

export default StarRating;
