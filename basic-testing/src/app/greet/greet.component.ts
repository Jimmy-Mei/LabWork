import { Component, OnInit } from '@angular/core';

import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  userName: string = ""
  numberA = 0
  numberB = 0
  addResult = 0

  constructor(private simpleService: SimpleService) { }

  ngOnInit() {
  }

  getGreeting(): string {
    return this.simpleService.sayHello(this.userName);
  }

  add() {
    this.simpleService.addNumbers(this.numberA, this.numberB)
      .subscribe((result) => this.addResult = result)
  }
}
