import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout-callback',
  template: '<div>CALL BACK FROM LOGOUT</div>'
})
export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this._authService.completeLogout().then(user => {
      this._router.navigate(['/'], {replaceUrl:true});
    })
  }

}
