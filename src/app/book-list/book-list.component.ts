import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Book {
  titel: string;
  autor: string;
  seiten: number;
  Erscheinungsjahr: number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  title = 'books-frontend';
  books;
  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit() {
    this.http
      .get<Book[]>('http://localhost:3000/books')
      .toPromise()
      .then((res) => {
        this.books = res;
        console.log(this.books);
      });
  }
  goforward(book) {
    console.log('go forward');
    this.router.navigate(['/book', book]);
  }
}
