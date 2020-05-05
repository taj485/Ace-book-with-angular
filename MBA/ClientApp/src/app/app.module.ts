import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  // add modules to imports 
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //])
  ],

  // add components to declarations
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoardComponent,
    PostThumbnailComponent,
    NavComponent,
    AddPostComponent,
    LoginComponent
  ],
  // add to providers to inject into components eg shared services
  providers: [MessageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
