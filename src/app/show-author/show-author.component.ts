import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {
  name:any=''
  work:any=''
  penname:any=''
  image:any=''
  author=(this.name,this.work,this.penname,this.image)
  constructor(private authorservice:AuthorService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('showauthor')
    this.authorservice.getAuthor(id)
    .subscribe((data)=>{
      console.log(data);
  
      this.author = JSON.parse(JSON.stringify(data)) 
      console.log(this.author);
      

    })


  }


}
