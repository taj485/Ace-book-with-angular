import { UserPageComponent } from "./user-profile/user-page/user-page.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";

export const AppRoutes:Routes = [
  { path: 'profile', component: UserPageComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
  ]
