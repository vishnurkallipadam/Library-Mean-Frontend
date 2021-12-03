import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

      title:any= '';
      author:any= '';
      genere:any= '';
      image:any= '';
   
   book=(this.title,this.author,this.genere,this.image)
  constructor(private bookservice:BookService) { 
    
  }

  ngOnInit(): void {
    let id = localStorage.getItem('showbook')
    this.bookservice.getBook(id)
    .subscribe((data)=>{
      console.log(data);
  
      this.book = JSON.parse(JSON.stringify(data)) 
      console.log(this.book);
      

    })
  }

}
