import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookmarksState } from "./bookmarks.reducer";

export const featureKey = 'bookmarks';

export interface AppState {
  bookmarks: BookmarksState;
}

export const selectFeature = createFeatureSelector<AppState, BookmarksState>(featureKey);

export const selectBookmarksList = createSelector(
  selectFeature,
  (state: BookmarksState) => state.groups.map(group => ({
    name: group.name,
    id: group.id,
    bookmarks: state.list.filter(bookmark => bookmark.groupId === group.id)
  }))
);


export const selectGroupsList = createSelector(
  selectFeature,
  (state: BookmarksState) => state.groups
);
