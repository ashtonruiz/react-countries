import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, }) {
  return (
    <div className='country-card'>
      <h2>{name}</h2>
    </div>
  );
}