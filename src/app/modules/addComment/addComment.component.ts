import { Component, OnInit, NgZone } from '@angular/core';
import { CommentDataService } from '../../data/services/CommentData.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addComment',
  templateUrl: './addComment.component.html',
  styleUrls: ['./addComment.component.css']
})

export class AddCommentComponent implements OnInit {
  commentForm: FormGroup;
  CommentArr: any = [];

  ngOnInit() {
    this.addComment()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public CommentDataService: CommentDataService
  ){ }

  addComment() {
    this.commentForm = this.fb.group({
      username: [''],
      comment: [''],
      email: ['']
    })
  }

  submitForm() {
    this.CommentDataService.CreateComment(this.commentForm.value).subscribe(res => {
      console.log('El comentario fue agregado')
      this.ngZone.run(() => this.router.navigateByUrl('/CommentList'))
    });
  }

}
