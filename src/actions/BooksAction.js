import { GET_BOOKS, GET_BOOKS_FAILED, GET_BOOKS_SUCCESS } from "../ActionType";
import booksService from "../services/BooksService";

export const fetchBooksDetails = () => (dispatch, getState) => {
  try {
    dispatch(getBooks());

    booksService.getBooksDetails().then((response) => {
      dispatch(getBooksSuccess(response));
    });
  } catch (error) {
    console.log(error);
    dispatch(getBooksFailed());
  }
};

export const getBooks = () => {
  return {
    type: GET_BOOKS,
    loading: true,
  };
};
export const getBooksSuccess = (response) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: response.responseData,
    loading: false,
  };
};
export const getBooksFailed = () => {
  return {
    type: GET_BOOKS_FAILED,
    loading: false,
  };
};
