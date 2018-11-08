import { Component, OnInit } from '@angular/core';

import { DataService, Book } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private book: Book = new Book

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  addBook(){
    this.dataService.saveBook(this.book).subscribe(_ => {
      //Go back to the home page
      this.router.navigate(['/'])
    })
  }
}
