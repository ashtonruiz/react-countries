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

// do I even need this page? I think so? 
// Because in my mind we have fetched the countries from SupaBase
// and with useCountries we are telling the app what to do with 
// those countries? Not entirely I guess. I'm still kind of fuzzy
// on what is going on here with this function