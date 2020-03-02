import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostThumbnailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
