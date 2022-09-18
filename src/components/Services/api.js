const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29393880-351538220907d4562d5b0c880';

export const getImages = (q = '') => {
  try {
    return fetch(`${BASE_URL}/?key=${API_KEY}&q=${q}&image_type=photo`).then(
      res => res.json()
    );
  } catch (error) {
    console.error(error);
  }
};
