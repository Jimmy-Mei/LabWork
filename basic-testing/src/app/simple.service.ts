import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SimpleService {

  constructor() { }

  sayHello(name: string): string {
    return `Hello ${name}`
  }

  addNumbers(a: number, b: number): Observable<number> {
    return Observable.of(a+b)
  }
}
