import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BookListComponent } from './book-list.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatSnackBarModule],
  declarations: [BookListComponent],
})
export class BookListModule {}
