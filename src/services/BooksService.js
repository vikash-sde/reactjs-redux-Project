import axios from "axios";

const BASE_URL = "https://anapioficeandfire.com/api";

export const getBooksDetails = () => {
  return axios.get(`${BASE_URL}/books`).then((response) => {
    if (response.status === 200) {
      return {
        responseData: response.data,
      };
    }
  });
};

const booksService = {
  getBooksDetails,
};

export default booksService;
