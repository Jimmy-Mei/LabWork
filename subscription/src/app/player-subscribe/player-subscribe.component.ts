import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-subscribe',
  template: `
    <subscription-form [interests]='players'></subscription-form>
  `,
  styles: []
})
export class PlayerSubscribeComponent implements OnInit {
  players = ["Lebron James", "Lionel Messi", "Manny Pacquiao"]

  constructor() { }

  ngOnInit() {
  }

}
