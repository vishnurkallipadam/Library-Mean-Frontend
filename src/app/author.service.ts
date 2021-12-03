import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  getAuthors(){
    return this.http.get('http://localhost:5000/authors')
  }

  getAuthor(id:any){
    return this.http.get('http://localhost:5000/author/'+id)
  }

  addAuthor(author:any){
    console.log(author);
    return this.http.post("http://localhost:5000/add-author",{"author":author})
    .subscribe((data)=>console.log(data))
  }
  removeAuthor(id:any){
    return this.http.delete('http://localhost:5000/remove-author/'+id)
  }
  updateAuthor(author:any){
    return this.http.put("http://localhost:5000/update-Author",author)
    .subscribe(data =>{console.log(data)})
  }

}
