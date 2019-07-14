import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseinfoComponent} from './baseinfo/baseinfo.component';
import {CommentsComponent} from './comments/comments.component';
import {FullInfoComponent} from './full-info/full-info.component';


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
  },
  {
    path: 'fullinfo',
    component: FullInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
