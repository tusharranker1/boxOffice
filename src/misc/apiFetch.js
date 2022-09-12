const API_URL = 'https://api.tvmaze.com';

export async function getApiData(args) {
  const response = await fetch(`${API_URL}${args}`).then(r => r.json());

  return response;
}
