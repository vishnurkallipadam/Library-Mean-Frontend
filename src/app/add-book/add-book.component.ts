import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { bookModel } from './book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title:any= '';
  author:any= '';
  genere:any= '';
  image:any= '';
  book=new bookModel(this.title,this.author,this.genere,this.image)
  constructor(private bookservice:BookService,private router:Router) { }

  ngOnInit(): void {
  }
  addBook(){
    console.log(this.book);
    
    this.bookservice.addBook(this.book)
    console.log("called");
    alert("success")
    this.router.navigate(['/'])
  }

}
