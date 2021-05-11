import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragndropInput } from 'ng-dragndrop-input';
import { ButtonWithDropComponent } from './components/button-with-drop/button-with-drop.component';
import { FileListComponent } from './components/file-list/file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonWithDropComponent,
    FileListComponent
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
