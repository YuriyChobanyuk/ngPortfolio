import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import {log} from 'util';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.sass']
})
export class MyformComponent implements OnInit {

  showFormData = false;
  currencyValue = 'KGS';

  userData = this.fb.group({
    name: ['', Validators.minLength(2)],
    email: ['', Validators.email],
    age: ['', [Validators.pattern('[0-3][0-9][.][0-1][0-9][.][0-9]{4}'), MyformComponent.validateAge]],
    salary: ['', [Validators.max(1000000), Validators.pattern('[0-9]+')]]
  });

  //

  static validateAge(c: FormControl) {
    const ageData = c.value.split('\.');
    const birthDate = new Date(Date.now());
    if (ageData.length === 3) {
      birthDate.setFullYear(ageData[2], ageData[1], ageData[0]);
    }
    const dateNow = new Date(Date.now());
    const resultDate = new Date(dateNow.valueOf() - birthDate.valueOf());
    return (resultDate.getFullYear() - 1970 >= 18) ? null : {

      validateAge: {
        valid: false
      }
    };
  }

  fullInData() {
    this.userData.patchValue({
      name: 'username',
      email: 'test@super.com',
      age: '12.10.1997',
      salary: 999999
    });
  }

  showData() {
    this.showFormData = true;
  }

  numberInput(event) {
    if (event.key.match(/[!@#$%^&*()]/gi)) {
      return false;
    }
    return !!(event.code.match(/Digit/gi) || event.code.match(/Backspace/gi) || event.code.match(/Delete/gi));
  }

  detectMax(event, maxValue) {
    if ((+event.target.value + event.key.match(/[0-9]/)) > maxValue) {
      return false;
    }
  }

  get name() {
    return this.userData.get('name');
  }
  get email() {
    return this.userData.get('email');
  }
  get age() {
    return this.userData.get('age');
  }
  get salary() {
    return this.userData.get('salary');
  }

  getCurrencyValue() {
    return this.currencyValue;
  }

  setCurrencyValue(value) {
    this.currencyValue = value;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

}
