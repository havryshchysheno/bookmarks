import { createAction, props } from '@ngrx/store';
import { BookmarkItem } from "../models";

export const ADD_BOOKMARK = '[Bookmarks] Add bookmark';
export const REMOVE_BOOKMARK = '[Bookmarks] Remove bookmark';

export const addBookmark = createAction(
  ADD_BOOKMARK,
  props<{bookmark: BookmarkItem}>()
);

export const removeBookmark = createAction(
  REMOVE_BOOKMARK,
  props<{id: number}>()
);
