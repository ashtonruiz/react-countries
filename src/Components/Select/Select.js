import React from 'react';

export default function Select({ setSelect }) {
  const options = ['All', 'Asia', 'North America', 'South America', 'Oceania', 'Africa', 'Europe', 'Antarctica'];

  return (
    <div className="form-control">
      <select onChange={(e) => setSelect(e.target.value)}>
        {options.map((opt) => (
          <option key={opt}>
            {opt}
          </option>
        ))}
      </select>
      
    </div>
  );
}