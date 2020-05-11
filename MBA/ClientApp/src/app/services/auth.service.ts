import { Injectable } from '@angular/core'
import { IUser } from '../models/user.model'
import { UserManager, User } from 'oidc-client'
import { Constants } from '../constants';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private _userManager: UserManager; //manages all the low level protal connectivity
  private _user: User; //encapsulate the clientside info about the signed in user
  // such as id and access token returned from the idenity provider
  // user profile info such as claims, token expiery
  private _loginChangeSubject = new Subject<boolean>();
  //subject can emit

  public loginChanged = this._loginChangeSubject.asObservable();
  //can suscribe to loginChanged. Everytime this is changed it will update
  //all component that has suscribed

  constructor(){
    const stsSettings = {
      authority: Constants.domain,
      client_id: Constants.clientID,
      redirect_uri: `${Constants.clientRoot}signin-callback`,
      response_type: 'code',
      scope: 'openid profile message-board-api',
      //post_logout_redirect_url: `${Constants.clientRoot}signout-callback`
      //post_logout_redirect_url: `https://localhost:44307/signout-callback`
      metadata: {
        issuer: `${Constants.domain}`,
        authorization_endpoint:`${Constants.domain}authorize?audience=message-board-api`,
        jwks_uri:`${Constants.domain}.well-known/jwks.json`,
        token_endpoint:`${Constants.domain}oauth/token`,  
        userinfo_endpoint:`${Constants.domain}userinfo`,
        end_session_endpoint:`${Constants.domain}v2/logout?client_id=${Constants.clientID}&reterunTo${encodeURI(Constants.clientRoot)}signout-callback`
      }
    };
    this._userManager = new UserManager(stsSettings)
  }

  login(){
    //step 2()
    return this._userManager.signinRedirect();
    //after successfull login, user manager stores in session storege
    //the resulting user object it creates so it can be retrived any time
    //User object contains ID/Access tokens which can be used to make api calls
  }

  logout(){
    return this._userManager.signoutRedirect();
  }

  isLoggedIn(): Promise<boolean>{
    return this._userManager.getUser().then(user => {
      const userCurrent = !!user && !user.expired;
      if(this._user !== user) {
        this._loginChangeSubject.next(userCurrent);
      }
      this._user = user;
      return userCurrent;
    });
    //When the redirect comes back from the STS to client(6)
    //The process the obtains the ID and Access token happens asyncronusly
    //from the loading of the reidrect view
  }

  completeLogin(){
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._loginChangeSubject.next(!!user && !user.expired);
      return user;
    })
  }

  completeLogout(){
    this._user = null;
    return this._userManager.signoutRedirectCallback();
    //will return the promise and will clear the state of the user manager
    //and the user object that it has cached
  }
  
}

//STS = Secruity Token Service,
//third party web service that authenticate and issue security tokens

//1 - User wants to login
//2 - Client redirects to STS
//3 - STS show log in page
//4 - User submits credentials
//5 - STS validates credentials
//6 - STS redirects to client with an auth code
//7 - UserManager calls the token end point of STS with the auth code
//8 - STS response with ID/Access tokens
//-------------------------
// PIXE
// UserManager will take care of the code verifier
// and hashing it to create the code challange and will send those to the STS

// currentUser:IUser

//   loginUser(userName: string, password: string) {
//     this.currentUser = {
//       id: 1,
//       userName: userName,
//       firstName: "Tom",
//       lastName: "Baker"
//     }
//   }

//   isAuthenticated() {
//     return !!this.currentUser;
//   }

