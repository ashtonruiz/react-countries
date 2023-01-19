import { useCountries } from '../../Hooks/countries.js';
import CountryCard from '../CountriesCard/CountryCard.js';
import Select from '../Select/Select.js';
import { useState } from 'react';

export default function Main() {
  const { countries } = useCountries();
  const [select, setSelect] = useState('All');
  const filterCountries = () => {
    if (select === 'All') {
      return countries;
    } else {
      return countries.filter((country) => country.continent === (select));
    }
  };

  return (
    <>
      <Select setSelect={setSelect}/>
      <main>
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country}/>
        ))}
      </main>
    </>
  );
}
