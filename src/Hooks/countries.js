import { useEffect, useState } from 'react';
import { getCountries } from '../services/FetchCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}