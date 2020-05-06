import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:red; padding-left:10px}
  `]
})
export class LoginComponent implements OnInit {

  mouseoverLogin
  username
  password

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    console.log(formValues)
  }

}
