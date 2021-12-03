import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { authorModel } from './author.model';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  name:any=''
  work:any=''
  penname:any=''
  image:any=''
  author=new authorModel(this.name,this.work,this.penname,this.image)

  constructor(private router:Router,private authorservice:AuthorService) { }

  ngOnInit(): void {
  }
  addAuthor(){
    this.authorservice.addAuthor(this.author)
    console.log("called");
    alert("success")
    this.router.navigate(['/authors'])


  }

}
