import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  name:any=''
  work:any=''
  penname:any=''
  image:any=''
  author=(this.name,this.work,this.penname,this.image)
  constructor(private authorservice:AuthorService,private router:Router) { }

  ngOnInit(): void {
    let id = localStorage.getItem('editAuthor')
    this.authorservice.getAuthor(id)
    .subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data))
    })
  }

  updateAuthor(){
    this.authorservice.updateAuthor(this.author)
    this.router.navigate(['/authors'])
    


  }

}
