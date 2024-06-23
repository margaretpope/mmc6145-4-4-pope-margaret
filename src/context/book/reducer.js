// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'


export default function reducer(initialState, {action, payload}) {
  switch (action) {
    case ADD_BOOK:
      const addToLocal = [...initialState.favoriteBooks, payload]
      saveToLocalStorage(addToLocal)
      return {...initialState, favoriteBooks: [...initialState.favoriteBooks, payload]}
    case REMOVE_BOOK:
      const removeFromLocal = [...initialState.favoriteBooks.filter(book => book.id !== payload)]
      saveToLocalStorage(removeFromLocal)
      return {...initialState, favoriteBooks: removeFromLocal}
    case SEARCH_BOOKS:
      return {...initialState, bookSearchResults: payload}
    default:
      return initialState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}