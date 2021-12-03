import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book!: {
    id: '';
    title: '';
    author: '';
    genere: '';
    image: '';

  }; 
  constructor(private bookservice:BookService,private router:Router) { 
    
  }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbook")
    this.bookservice.getBook(bookId)
    .subscribe((data)=>{
      this.book = JSON.parse(JSON.stringify(data))
    })

  }
  updateBook(){
    console.log(this.book);
    
    this.bookservice.updateBook(this.book)
    this.router.navigate(['/'])
  }

}
