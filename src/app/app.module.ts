import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseinfoComponent } from './baseinfo/baseinfo.component';
import { CommentsComponent } from './comments/comments.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule} from '@angular/forms';
import { FullInfoComponent } from './full-info/full-info.component';
import { MyformComponent } from './myform/myform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgePipePipe } from './age-pipe.pipe';
import { MyHoverDirective } from './my-hover.directive';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {httpInterceptorProviders} from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    BaseinfoComponent,
    CommentsComponent,
    NavigationComponent,
    FullInfoComponent,
    MyformComponent,
    AgePipePipe,
    MyHoverDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
