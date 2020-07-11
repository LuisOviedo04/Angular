import { Component, OnInit, NgZone } from '@angular/core';
import { CommentDataService } from '../../data/services/CommentData.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editComment',
  templateUrl: './editComment.component.html',
  styleUrls: ['./editComment.component.css']
})

export class EditCommentComponent implements OnInit {
  CommentsList: any = [];
  updateCommentForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,    
    public CommentDataService: CommentDataService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.CommentDataService.GetComment(id).subscribe((data) => {
      this.updateCommentForm = this.fb.group({
        username: [data.username],
        comment: [data.comment],
        email: [data.email]
      })
    })
  }

  updateForm(){
    this.updateCommentForm = this.fb.group({
      username: [''],
      comment: [''],
      email: ['']
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.CommentDataService.UpdateComment(id, this.updateCommentForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/CommentList'))
    })
  }

}