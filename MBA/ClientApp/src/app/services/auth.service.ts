import { Injectable } from '@angular/core'
import { IUser } from '../models/user.model'

@Injectable()
export class AuthService {
  currentUser:IUser

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: "Tom",
      lastName: "Baker"
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

}
