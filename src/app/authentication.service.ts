import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  formData = '';
  TOKEN = '';

  url = 'http://35.228.86.127:8080/';

  createFrom() {
    return this.formBuilder.group({
      username: ['', Validators.minLength(2)],
      password: ['', Validators.minLength(6)]
    });
  }

  setFormData(loginForm: FormGroup) {
    const formData = {
      username: '',
      password: ''
    };
    formData.username = loginForm.get('username').value;
    formData.password = loginForm.get('password').value;
    this.formData = JSON.stringify(formData);
  }


  getToken() {
    console.log(this.formData);
    this.http.post(this.url + 'signin', this.formData, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response',
      responseType: 'json'
    }).subscribe(data => this.TOKEN = data.headers.get(data.headers.keys()[0]));
    console.log(this.TOKEN);
  }

  async getTeachers() {
    return await this.http.get(this.url + 'teachers', {
      observe: 'response'
    }).toPromise();
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
}
