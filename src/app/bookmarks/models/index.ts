
export interface BookmarkItem {
  id: number;
  name: string;
  url: string;
  groupId: number;
}

export interface GroupItem {
  id: number;
  name: string;
  bookmarks: BookmarkItem[];
}

export type Group = Omit<GroupItem, 'bookmarks'>;
