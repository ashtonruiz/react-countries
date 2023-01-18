import { useCountries } from '../../Hooks/countries.js';
import CountryCard from '../CountriesCard/CountryCard.js';

export default function Main() {
  const countries = useCountries();
  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country}/>
      ))}
    </main>
  );
}

// not confident I am mapping through these correctly. 
// I am wondering if lines 8 & 9 should actually be 
// "countries" and "{countries.id}". Will ask TA.