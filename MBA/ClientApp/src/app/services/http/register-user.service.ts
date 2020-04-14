import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterModel } from "../../register-user/Models/register.model";

@Injectable()
export class RegisterUserService {
  constructor(private http: HttpClient) { }

  register(newUser: RegisterModel) {
    return this.http.post<RegisterModel>("/api/account/Register", newUser)
      .toPromise().then(data => {
        console.log(data)
      });
  }
}
