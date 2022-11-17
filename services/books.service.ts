import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'models/books.model';
import { bindNodeCallback, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Book[]>
  {
    return this.http.get<Book[]>(this.baseApiUrl+'/api/Books');
  }

  addBook(addBookRequest:Book) : Observable<Book>
  {
    addBookRequest.bid='00000000-0000-0000-0000-000000000000';
    return this.http.post<Book>(this.baseApiUrl+'/api/Books',addBookRequest);
  }

  getBook(bid:string) : Observable<Book>{
    return this.http.get<Book>(this.baseApiUrl+'/api/Books/'+bid);
  }
  

  updateBook(bid:string,updateBookRequest:Book):Observable<Book>
  {

    return this.http.put<Book>(this.baseApiUrl+'/api/Books/'+bid,updateBookRequest);
    
  }

  deleteBook(bid:string):Observable<Book>
  { 
   return this.http.delete<Book>(this.baseApiUrl+'/api/Books/'+bid);
  }
  
}
