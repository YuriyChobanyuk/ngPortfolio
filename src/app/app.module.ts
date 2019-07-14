import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseinfoComponent } from './baseinfo/baseinfo.component';
import { CommentsComponent } from './comments/comments.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule} from '@angular/forms';
import { FullInfoComponent } from './full-info/full-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseinfoComponent,
    CommentsComponent,
    NavigationComponent,
    FullInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
