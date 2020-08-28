import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { BookListComponent } from './book-list.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [BookListComponent],
})
export class BookListModule {}
