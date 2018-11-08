import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-magazine',
  template: `
  <form [formGroup]="magazineForm" (ngSubmit)="submitForm()">
    Full Name:<br/>
    <span style="color: red"
      [hidden]="magazineForm.controls.fullName.valid || magazineForm.controls.fullName.untouched">
      Please enter your name<br/>
    </span>
    <input formControlName="fullName" type="text" /><br/>
    Valid: {{magazineForm.controls.fullName.valid}}<br/>
    Touched: {{magazineForm.controls.fullName.touched}}<br/>
    Dirty: {{magazineForm.controls.fullName.dirty}}<br/>
    Magazine edition:<br/>
    <select formControlName="selectedEdition" >
      <option *ngFor="let e of editions"
        [ngValue]="e">{{e.editionName}}</option>
    </select><br/>
    Shipping option:
    <input type="radio" formControlName="selectedShipping" 
      value="GROUND"/>Ground
    <input type="radio" formControlName="selectedShipping" 
      value="AIR"/>AIR <br/>
    <input formControlName="acceptPolicy" type="checkbox" />
      I accept the terms and conditions<br/>
    <br/>
    Price: {{magazineForm.value.selectedEdition.price}}
    <br/>

    <button [disabled]="magazineForm.invalid" 
      type="submit">Purchase</button>
  </form>
  `,
  styles: ["input.ng-touched.ng-invalid {background: red}", "input:required {box-shadow:none;}"]
})
export class MagazineComponent implements OnInit {
  //Replaced and using formBuilder
  //fullName = new FormControl('');
  editions = [
    {editionCode: 1, editionName: "US", price: "10.99 USD"},
    {editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
    {editionCode: 3, editionName: "International", price: "23.99 USD"},
  ]
  //selectedEdition = new FormControl(this.editions[0]); //US by default
  //selectedShipping = new FormControl('');
  //acceptPolicy = new FormControl(false);

  magazineForm: FormGroup;

  createForm() {
    this.magazineForm = this.formBuilder.group({
      fullName: ['', Validators.required ],
      selectedEdition: this.editions[0],
      selectedShipping: '',
      acceptPolicy: false
    })
  }

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  submitForm() {
    let requestData = {
      customerName: this.magazineForm.value.fullName,
      productCode: this.magazineForm.value.selectedEdition.editionCode,
      acceptPolicy: this.magazineForm.value.acceptPolicy,
      shipMode: this.magazineForm.value.selectedShipping
    }

    alert(JSON.stringify(requestData))
  }
}
