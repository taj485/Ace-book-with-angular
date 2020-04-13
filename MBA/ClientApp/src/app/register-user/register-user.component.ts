import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/register-user/Models/register.model'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  newUser: RegisterModel = {
    username: null,
    password: null,
    confirmPassword: null
  };


  constructor() { }

  ngOnInit() {
  }

  registerUser(newUser: RegisterModel) {
    console.log(newUser);
  }

}
