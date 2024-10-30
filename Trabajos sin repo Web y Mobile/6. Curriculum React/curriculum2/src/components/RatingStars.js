import React, { useState } from 'react';

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const renderStar = (index) => (
    <button type="button"
      onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}
      style={{background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
    >
      <span className="star" style={{ fontSize: '50px', color: 'gold' }}>
        {index <= (hover || rating) ? '★' : '☆'}
      </span>
    </button>

  );

  return (
    <div className="d-flex justify-content-center">
      {renderStar(1)}
      {renderStar(2)}
      {renderStar(3)}
      {renderStar(4)}
      {renderStar(5)}
    </div>
  );
};

export default RatingStars;