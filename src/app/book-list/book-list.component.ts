import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(
    private http: HttpClient,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.http
      .get<Book[]>('http://localhost:3000/books')
      .toPromise()
      .then((res) => {
        this.books = res;
        console.log(this.books);
      })
      .catch((err) => {
        console.log(err);
        this._snackBar.open('No connection to API', 'Ok', {
          duration: 20000,
        });
      });
  }
  goforward(book) {
    console.log('go forward');
    this.router.navigate(['/book', book]);
  }
}
