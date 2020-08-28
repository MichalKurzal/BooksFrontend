import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { BookDetailComponent } from './book-detail.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [BookDetailComponent],
})
export class BookDetailModule {}
