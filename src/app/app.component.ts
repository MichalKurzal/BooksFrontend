import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'books-frontend';

  constructor(public router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  goback() {
    this.router.navigate(['/books']);
  }
  clickbutton() {
    this._snackBar.open(
      'In order to run this App you have to start booksAPI. Icons made by Freepik.',
      'Ok'
    );
  }
}
