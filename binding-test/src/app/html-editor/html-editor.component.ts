import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-editor',
  template: `
    <textarea [ngModel]="userInput" (ngModelChange)="updateHTML($event)" row="5" cols="40">
    </textarea>
    <h4>Preview</h4>
    <div [innerHTML] = "userInput"></div>

    <h4>Raw Text</h4>
    <pre>{{userInput}}</pre>
  `,
  styles: []
})
export class HtmlEditorComponent implements OnInit {
  userInput = "Enter HTML here"

  constructor() { }

  ngOnInit() {
  }

  updateHTML(newValue) {
    console.log("HTML update: %s", newValue)

    this.userInput = newValue
  }
}
