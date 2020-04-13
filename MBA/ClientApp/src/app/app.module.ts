import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { MessageService } from './shared/message.service';
import { AddPostComponent } from './add-post/add-post.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const appRoutes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  // add modules to imports 
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],

  // add components to declarations
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoardComponent,
    PostThumbnailComponent,
    NavComponent,
    AddPostComponent,
    RegisterUserComponent
  ],
  // add to providers to inject into components eg shared services
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
