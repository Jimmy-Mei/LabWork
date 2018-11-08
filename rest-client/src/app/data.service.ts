import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch'

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>("/books")
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`/books/${isbn}`)
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.delete(`/books/${isbn}`)
    .catch(err => {
      return Observable.throw("Sorry there was a problem.")
    })
  }

  saveBook(book: Book): Observable<any> {
    return this.http.put(`/books/${book.isbn}`, book)
  }
}

export class Book {
  isbn: string
  title: string
  price: number
}
