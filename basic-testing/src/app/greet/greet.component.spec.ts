import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetComponent } from './greet.component';

//These two need to be imported for the ngModel used in the HTML and to get SimpleService because the component is being tested and not the application module.
import { SimpleService } from '../simple.service';
import { FormsModule } from '@angular/forms';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GreetComponent', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetComponent ],
      imports: [FormsModule],
      providers: [SimpleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get greeting', () => {
    component.userName = "Daffy Duck"

    expect(component.getGreeting()).toBe("Hello Daffy Duck")
  });

  it('Handle state change', () => {
    component.userName = "Bob"

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').textContent)
      .toBe('Hello Bob');
  });

  it('Add numbers', () => {
    component.numberA = 10
    component.numberB = 20

    //Simluate button click
    let button: DebugElement = fixture.debugElement.query(By.css("button"));

    button.triggerEventHandler("click", null);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').textContent)
      .toBe('30');
  });
});
