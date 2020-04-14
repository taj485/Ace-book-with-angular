import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/register-user/Models/register.model'
import { RegisterUserService } from '../services/http/register-user.service';

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


  constructor(private registerUserService: RegisterUserService) { }

  ngOnInit() {
  }

  registerUser(newUser: RegisterModel) {
    console.log(newUser);
    this.registerUserService.register(newUser)
  }

}
