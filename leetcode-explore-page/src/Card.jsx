import React from 'react';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <div className="card-header">
        <strong>{title}</strong>
      </div>
      <div className="card-footer">
        <a href={link}>View More</a>
      </div>
    </div>
  );
};

export default Card;