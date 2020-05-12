import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  //isLoggedIn = false;
  userName: string;
  isAuthenticated = false;

  constructor(private oktaAuth: OktaAuthService){
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(value => {
      this.isAuthenticated = value;
    })
  }

  async ngOnInit() {
    //when the user leaves the page and comes back, this will check if the
    //user was logged in previously (stored in session storege)
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    const userClaims = await this.oktaAuth.getUser();
      this.userName = userClaims.name;
   
    
  }

  login(){
    this.oktaAuth.loginRedirect('/home');
  }

  logout(){
    this.oktaAuth.logout();
  }
  

}
