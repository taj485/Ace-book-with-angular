import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


//import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponentOld } from './home-old/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { PostThumbnailComponent } from './message-board/post-thumbnail/post-thumbnail.component';
import { NavComponent } from './nav-menu/nav.component';
import { MessageService } from './services/message.service';
import { AddPostComponent } from './message-board/add-post/add-post.component';
import { LoginComponent } from './security/login/login.component';
import { AuthService } from './services/auth.service';
import { UserPageComponent } from './user-profile/user-page/user-page.component';
import { AppRoutes } from './routes';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SigninRedirectCallbackComponent } from './security/signin-redirect-callback/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './security/signout-redirect-callback copy/signout-redirect-callback.component';

@NgModule({
  // add modules to imports 
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    OAuthModule.forRoot()
  ],

  // add components to declarations
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoardComponent,
    PostThumbnailComponent,
    NavComponent,
    AddPostComponent,
    LoginComponent,
    UserPageComponent,
    SigninRedirectCallbackComponent,
    SignoutRedirectCallbackComponent
  ],
  // add to providers to inject into components eg services
  providers: [MessageService, AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
