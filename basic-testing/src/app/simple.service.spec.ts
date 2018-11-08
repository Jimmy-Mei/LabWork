import { TestBed, inject } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService]
    });
    service = TestBed.get(SimpleService)
  });

  it('should be created', inject([SimpleService], (service: SimpleService) => {
    expect(service).toBeTruthy();
  }));

  it("Should call sayHello", () => {
    let name = "Bob"
    let greeting = service.sayHello(name)

    expect(greeting).toBe(`Hello ${name}`)
  });

  it("Should add numbers", (done) => {
    service.addNumbers(3, 4).subscribe((result) => {
      expect(result).toBe(7)
      done()
    })
  })
});
