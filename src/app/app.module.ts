import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Http client module */
import { HttpClientModule } from '@angular/common/http';

/* Service */
import { CommentDataService } from './data/services/CommentData.service';

/* Forms module */
import { ReactiveFormsModule } from '@angular/forms';

/* Components */
import { AddCommentComponent } from './modules/addComment/addComment.component';
import { EditCommentComponent } from './modules/editComment/editComment.component';
import { CommentListComponent } from './modules/commentList/commentList.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCommentComponent,
    EditCommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CommentDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }