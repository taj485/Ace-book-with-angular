import { UserPageComponent } from "./user-profile/user-page/user-page.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { SigninRedirectCallbackComponent } from "./security/signin-redirect-callback/signin-redirect-callback.component";
import { SignoutRedirectCallbackComponent } from "./security/signout-redirect-callback copy/signout-redirect-callback.component";

export const AppRoutes:Routes = [
  { path: 'profile', component: UserPageComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'signin-callback', component: SigninRedirectCallbackComponent},
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent}
  ]
