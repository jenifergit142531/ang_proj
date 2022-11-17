import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
 
   
      BooksComponent,
            AddBookComponent,
            EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
