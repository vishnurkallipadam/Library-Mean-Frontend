import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  
    name:any=''
    work:any=''
    penname:any=''
    image:any=''
    authors=(this.name,this.work,this.penname,this.image)

  constructor(private authorservice:AuthorService,private router:Router) { }

  ngOnInit(): void {
    this.authorservice.getAuthors()
    .subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data))
    })
  }

  editAuthor(author:any){
    localStorage.setItem('editAuthor',author._id)
    this.router.navigate(['/update-author'])
  }
  
  removeAuthor(author:any){
    console.log(author);
    this.authorservice.removeAuthor(author._id)
    .subscribe((data) => {
      console.log('removed');
      this.router.navigate(['authors'])
    })


  }
  showAuthor(author:any){
    localStorage.setItem('showauthor',author._id)
    this.router.navigate(['author'])
  }

}
