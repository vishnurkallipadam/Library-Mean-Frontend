import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private bookService:BookService, public router:Router, public auth:AuthService ) { }
  
  books!: [
    {
      title: '';
      author: '';
      genere: '';
      image: '';
    }
  ];

  ngOnInit(): void {
    console.log("initialised");
    
    this.bookService.getBooks()
    .subscribe((data)=>{
      console.log(data);
      this.books = JSON.parse(JSON.stringify(data)) 

    })
  }
  showBook(book:any){
    localStorage.setItem('showbook',book._id)
    this.router.navigate(['book'])
  }

  editBook(book:any){
    localStorage.setItem("editbook", book._id.toString());
    this.router.navigate(['update']);
    
  }
  removeBook(book:any){
      console.log(book);
      this.bookService.removeBook(book._id)
      .subscribe((data) => {
        this.router.navigate(['books'])
      })
  

  }

}
