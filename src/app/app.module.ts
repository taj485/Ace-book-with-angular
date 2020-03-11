import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { MessageService } from './message-board/shared/message.service'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoardComponent,
    PostThumbnailComponent,
    NavComponent
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
