import { checkError, client } from './client.js';

export async function fetchCountries() {
  const response = await client.from('countries').select('*');
  console.log(response, 'this one');
  return checkError(response);
}

// console.log is currently not showing anything in the console. 
// server is showing white screen which tells me we are either 
// getting nothing from SupaBase or my main.js function is bad

// main.js function is fine - now getting error in console that says SupaBaseURL
// is required. 