import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'models/books.model';
import { BooksService } from 'services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookRequest:Book={
    bid:'',
    bname:'',
    author:'',
    price: 0,
  };
  constructor(private bookservice:BooksService,private router:Router) { }

  ngOnInit(): void {
  }
  addBook()
  {
    this.bookservice.addBook(this.addBookRequest)
    .subscribe({
      next:(book)=>
      {
        this.router.navigate(['books']);
        console.log(book);
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }

}
