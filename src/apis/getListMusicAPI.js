import Axios from 'axios';

export const getListMusicAPI = async (query = 'taylor swift') => {
  const config = {
    method: 'get',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: query},
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': 'f2849f26d9msh09954d0dd87637ep1386fcjsn48c1f9309d39',
    },
  };

  try {
    let response = await Axios(config);
    //console.log(JSON.stringify(response));
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
