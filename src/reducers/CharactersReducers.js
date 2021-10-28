import {
  GET_CHARACTERS,
  GET_CHARACTERS_FAILED,
  GET_CHARACTERS_SUCCESS,
} from "../ActionType";

const initialState = {
  loading: false,
  charactersdetails: [],
};

export default function charactersreducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, loading: action.loading };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        charactersdetails: action.payload,
        loading: action.loading,
      };
    case GET_CHARACTERS_FAILED:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}

export const getCharactersDetails = (state) =>
  state.characters.charactersdetails;
