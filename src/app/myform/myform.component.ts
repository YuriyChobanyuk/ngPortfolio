import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.sass']
})
export class MyformComponent implements OnInit {


  userData: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.minLength(2)]),
      email: new FormControl('', [Validators.email]),
      age: new FormControl('', [Validators.min(18),
        Validators.pattern('[0-9]+')]),
      salary: new FormControl('', [Validators.max(1000000),
        Validators.pattern('[0-9]+')])
    });

  fullInData() {
    this.userData.patchValue({
      name: 'username',
      email: 'test@super.com',
      age: '18',
      salary: 999999
    });
  }

  showData() {
    console.log(this.userData.value);
    this.userData.patchValue({
      name: '',
      email: '',
      age: '',
      salary: ''
    });
  }

  numberInput(event) {
    if (event.code.match(/Key\w/gi)) {
      return false;
    }
  }

  get name() {
    return this.userData.get('name').valid;
  }
  get email() {
    return this.userData.get('email').valid;
  }
  get age() {
    return this.userData.get('age').valid;
  }
  get salary() {
    return this.userData.get('salary').valid;
  }

  constructor() { }

  ngOnInit() {
  }

}
