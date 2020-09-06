import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface Book {
  titel: string;
  autor: string;
  seiten: number;
  Erscheinungsjahr: number;
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  id: any;
  book: Book;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      console.log(this.id);
      this.http
        .get<Book[]>('http://localhost:3000/books/' + this.id)
        .toPromise()
        .then((res: any) => {
          this.book = {
            titel: res.titel,
            autor: res.autor,
            seiten: res.seiten,
            Erscheinungsjahr: res.Erscheinungsjahr,
          };
          console.log(this.book);
        });
    });
  }
}
