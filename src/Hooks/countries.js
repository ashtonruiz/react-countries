import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/FetchCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setError('Uh oh! Something went wrong, bestie');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
