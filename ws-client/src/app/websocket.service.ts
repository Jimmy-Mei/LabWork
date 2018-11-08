import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import * as io from "socket.io-client";

@Injectable()
export class WebsocketService {
  socket: any;
  url = 'ws://localhost:4200';
  getMessages() {
    const observable = new Observable(
     (observer: Subscriber<string>) => {
      this.socket = io(this.url);
      this.socket.emit('getquotes', 'start');
      this.socket.on('newquote', (data: string) => {
        observer.next(data);
      });
    });
    return observable;
  }
  stopMessages() { this.socket.disconnect(); }
}


