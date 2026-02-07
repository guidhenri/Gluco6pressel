import React from 'react';

const Card = ({ title, value, helper }) => (
  <div className="card">
    <div className="card-title">{title}</div>
    <div className="card-value">{value}</div>
    <div className="card-helper">{helper}</div>
  </div>
);

export default Card;
