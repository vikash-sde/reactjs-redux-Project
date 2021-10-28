import { combineReducers } from "redux";
import booksreducer from "./BooksReducer";
import charactersreducer from "./CharactersReducers";

export const rootReducer = combineReducers({
  books: booksreducer,
  characters: charactersreducer,
});
