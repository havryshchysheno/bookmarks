import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BookmarkItem } from "../../models";

@Component({
  selector: 'app-delete-bookmark-dialog',
  templateUrl: './delete-bookmark-dialog.component.html',
  styleUrls: ['./delete-bookmark-dialog.component.scss']
})
export class DeleteBookmarkDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: BookmarkItem) { }
}
