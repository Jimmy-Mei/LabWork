import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "subscription-form",
  templateUrl: "./subscription-form.component.html",
  styles: []
})
export class SubscriptionFormComponent implements OnInit {
  @Input() interests: [string]

  constructor() { }

  ngOnInit() {
  }

}
