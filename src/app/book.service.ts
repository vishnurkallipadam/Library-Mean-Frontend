import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  service_address:string='api'

  getBooks(){
    return this.http.get<any>('http://localhost:5000/books') 
  }
  getBook(id:any){
    return this.http.get('http://localhost:5000/book/'+id)
  }
  addBook(book:any){
    console.log(book);
    return this.http.post("http://localhost:5000/add-book",{"book":book})
    .subscribe((data)=>console.log(data))
  }
  removeBook(id:any){
    return this.http.delete('http://localhost:5000/remove-book/'+id)
  }
  updateBook(book:any){
    return this.http.put("http://localhost:5000/update-book",book)
    .subscribe(data =>{console.log(data)})
  }
}
