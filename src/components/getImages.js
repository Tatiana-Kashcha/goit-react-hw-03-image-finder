import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35802971-9f205e77cee7d2465290329c6';

async function getImages() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: currentPage,
      },
    });
    console.log(response); //для перевірки
    return response;
  } catch (error) {
    console.error(error);
  }
}
export { getImages };
