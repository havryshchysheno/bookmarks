import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { BookmarksComponent } from './bookmarks.component';
import { featureKey, bookmarksReducer } from "./modules/";
import { StoreModule } from "@ngrx/store";
import { DeleteBookmarkDialogComponent } from './components/';


@NgModule({
  declarations: [BookmarksComponent, DeleteBookmarkDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(featureKey, bookmarksReducer)
  ],
  entryComponents: [DeleteBookmarkDialogComponent],
  exports: [BookmarksComponent]
})
export class BookmarksModule { }
