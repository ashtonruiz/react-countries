import { checkError, client } from './client.js';

export async function fetchCountries() {
  const response = await client.from('countries').select('*');
  console.log(response, 'this one');
  return checkError(response);
}