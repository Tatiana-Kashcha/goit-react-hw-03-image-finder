import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '35802971-9f205e77cee7d2465290329c6';

export const getImagesApi = async (searchText, currentPage) => {
  const response = await axios.get(
    `${BASE_URL}/?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`
  );
  return response;
};
