import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'models/books.model';
import { BooksService } from 'services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
bookDetails : Book={
  bid:'',
  bname:'',
  author:'',
  price: 0,
};

  constructor(private route:ActivatedRoute,private bookservice:BooksService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const bid=params.get('bid');
        if(bid){
          this.bookservice.getBook(bid)
          .subscribe({
            next:(response)=>{
              this.bookDetails=response;

            }
          })
        }

      }
    })

  }

  updateBook()
  {
    this.bookservice.updateBook(this.bookDetails.bid,this.bookDetails)
    .subscribe({
      next:(response)=>
      {
        this.router.navigate(['books']);
        
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }

  deleteBook(bid:string)
  {
     this.bookservice.deleteBook(bid)
     .subscribe({
      next:(response)=>
      {
        this.router.navigate(['books']);
      }
      
     });
  }
  

}
