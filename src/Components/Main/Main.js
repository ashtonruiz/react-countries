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