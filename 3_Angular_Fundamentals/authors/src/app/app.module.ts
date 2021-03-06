import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
