import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  title = 'books-frontend';
  books: any;
  constructor(
    private http: HttpClient,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.http
      .get('http://localhost:3000/books')
      .toPromise()
      .then((res: any) => {
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
