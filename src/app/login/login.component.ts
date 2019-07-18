import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  teachers: any;

  loginFrom: FormGroup;

  submitForm(event) {
    event.preventDefault();

    this.authService.setFormData(this.loginFrom);
    this.authService.getToken();
  }

  async getTeachers() {
    const response = await this.authService.getTeachers();
    // @ts-ignore
    this.teachers = response.body.data;
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginFrom = this.authService.createFrom();
  }

}
