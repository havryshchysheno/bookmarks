import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { addBookmark, AppState, removeBookmark, selectBookmarksList, selectGroupsList } from "./modules";
import { Observable } from "rxjs";
import { BookmarkItem, Group, GroupItem } from "./models";
import { MatDialog } from "@angular/material/dialog";
import { DeleteBookmarkDialogComponent } from "./components";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksComponent {
  bookmarksGroup$: Observable<GroupItem[]> = this.store.select(selectBookmarksList);
  possibleGroups$: Observable<Group[]> = this.store.select(selectGroupsList);
  bookmarkForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    url: [null, [Validators.required, Validators.pattern('^(https?|chrome):\\/\\/[^\\s$.?#].[^\\s]*$')]],
    groupId: [null, [Validators.required]]
  });

  constructor(private store: Store<AppState>, private dialog: MatDialog, private formBuilder: FormBuilder) { }

  public trackById(index: number, item: GroupItem | BookmarkItem | Group): number {
    return item.id;
  }

  public onRemoveIconClicked(bookmark: BookmarkItem) {
    const dialogRef = this.dialog.open(DeleteBookmarkDialogComponent, {
      data: bookmark
    });

    dialogRef.afterClosed().subscribe(result => result ?
      this.store.dispatch(removeBookmark({id: bookmark.id})) : null
    );
  }

  public addBookmark() {
    if (this.bookmarkForm.valid) {
      this.store.dispatch(addBookmark({bookmark: this.bookmarkForm.value}));
    }
  }

  public onSubmit(event: Event) {
    (event.currentTarget as HTMLFormElement).reset()
    this.bookmarkForm.reset()
  }
}
