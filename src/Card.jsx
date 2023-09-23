import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
       <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;