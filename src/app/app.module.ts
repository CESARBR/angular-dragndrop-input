import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragndropInput } from 'ng-dragndrop-input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragndropInput
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
