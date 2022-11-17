import { Component, OnInit } from '@angular/core';
import { Book } from 'models/books.model';
import { BooksService } from 'services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[]=[];

  constructor(private bookservices:BooksService) { }

  ngOnInit(): void {
    
    this.bookservices.getAllBooks()
    .subscribe({
      next:(books)=>
      {
        this.books=books;
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

}
