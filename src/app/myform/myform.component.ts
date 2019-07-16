import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.sass']
})
export class MyformComponent implements OnInit {

  userData = new FormGroup({
    name: new FormControl('', [Validators.minLength(2)]),
    email: new FormControl('', [Validators.email]),
    age: new FormControl('', [Validators.min(18)]),
    salary: new FormControl('', [Validators.max(1000000)])
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

  constructor() { }

  ngOnInit() {
  }

}
