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

  isLoggedIn = false;

  constructor(private _authService: AuthService){
    //event handeler to update isLoggedIn when status is changed
    this._authService.loginChanged.subscribe(value => {
      this.isLoggedIn = value;
    })
  }

  ngOnInit(): void {
    //when the user leaves the page and comes back, this will check if the
    //user was logged in previously (stored in session storege)
    this._authService.isLoggedIn().then(value => {
      this.isLoggedIn = value;
    })
  }

  login(){
    this._authService.login();
  }

  logout(){
    this._authService.logout();
  }
  
}

// mouseoverLogin
// username
// password

// constructor(private authService:AuthService) { }

//   ngOnInit() {
//   }

//   login(formValues) {
//     this.authService.loginUser(formValues.userName, formValues.password)
//     console.log(formValues)
//   }
