import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="border rounded-lg shadow p-4 max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-2" />
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p> 
    </div>
  );
};

export default Card;
