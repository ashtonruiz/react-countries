import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, }) {
  return (
    <div className='country-card'>
      <h2>{name}</h2>
    </div>
  );
}

// Need to figure out how to implement photos of flags. Rubric says Flagpedia API. I don't think I know how to use APIs but maybe I do and I just don't realize it? Need TA