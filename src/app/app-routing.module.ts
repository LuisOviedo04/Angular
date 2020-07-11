import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCommentComponent } from './modules/addComment/addComment.component';
import { EditCommentComponent } from './modules/editComment/editComment.component';
import { CommentListComponent } from './modules/commentList/commentList.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'addComment' },
  { path: 'addComment', component: AddCommentComponent },
  { path: 'editComment/:id', component: EditCommentComponent },
  { path: 'CommentList', component: CommentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
