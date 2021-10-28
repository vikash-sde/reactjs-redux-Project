import { GET_BOOKS, GET_BOOKS_FAILED, GET_BOOKS_SUCCESS } from "../ActionType";

const initialState = {
  loading: false,
  booksdetails: [],
};

export default function booksreducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, loading: action.loading };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        booksdetails: action.payload,
        loading: action.loading,
      };
    case GET_BOOKS_FAILED:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}

export const getBooksDetails = (state) => state.books.booksdetails;
