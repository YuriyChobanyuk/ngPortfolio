import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseinfoComponent} from './baseinfo/baseinfo.component';
import {CommentsComponent} from './comments/comments.component';


const routes: Routes = [
  {
    path: 'baseinfo',
    component: BaseinfoComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  { path: '',
    redirectTo: 'baseinfo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
