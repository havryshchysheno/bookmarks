import { BookmarkItem, Group } from "../models";
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "./bookmarks.actions";

export interface BookmarksState {
  list: BookmarkItem[],
  groups: Group[]
}

const initialState: BookmarksState = {
  list: [{id: 1, name: 'google', url: 'http://google.com', groupId: 1}],
  groups: [{id: 1, name: 'work'}, {id: 2, name: 'personal'}, {id: 3, name: 'leisure'}]
}

export function bookmarksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK: {
      // Emulate id autoincrement
      const id = Math.max(...state.list.map(item => item.id)) + 1;
      return {
        ...state,
        list: [...state.list, {id, ...action.bookmark}]
      }
    }
    case REMOVE_BOOKMARK: {
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      }
    }
    default:
      return state;
  }
}
