import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {
    path:'',component:HomeComponent
  },
  {
    path:'books',component:BooksComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'addbook',component:AddBookComponent
  },
  {
    path:'books/edit/:bid',component:EditBookComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
