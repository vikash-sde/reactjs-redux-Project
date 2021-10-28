import {
  GET_CHARACTERS,
  GET_CHARACTERS_FAILED,
  GET_CHARACTERS_SUCCESS,
} from "../ActionType";
import characterService from "../services/CharactersService";

export const fetchCharactersDetails = () => (dispatch, getState) => {
  try {
    dispatch(getCharacters());

    characterService.getCharactersDetails().then((response) => {
      dispatch(getCharactersSuccess(response));
    });
  } catch (error) {
    console.log(error);
    dispatch(getCharactersFailed());
  }
};

export const getCharacters = () => {
  return {
    type: GET_CHARACTERS,
    loading: true,
  };
};
export const getCharactersSuccess = (response) => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: response.responseData,
    loading: false,
  };
};
export const getCharactersFailed = () => {
  return {
    type: GET_CHARACTERS_FAILED,
    loading: false,
  };
};
