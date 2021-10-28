import axios from "axios";

const BASE_URL = "https://anapioficeandfire.com/api";

export const getCharactersDetails = () => {
  return axios.get(`${BASE_URL}/characters`).then((response) => {
    if (response.status === 200) {
      return {
        responseData: response.data,
      };
    }
  });
};

const characterService = {
  getCharactersDetails,
};

export default characterService;
