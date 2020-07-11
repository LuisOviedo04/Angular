import { Component, OnInit } from '@angular/core';
import { CommentDataService } from '../../data/services/CommentData.service';

@Component({
  selector: 'app-commentList',
  templateUrl: './commentList.component.html',
  styleUrls: ['./commentList.component.css']
})
export class CommentListComponent implements OnInit {

  CommentList: any = [];


  ngOnInit() {
    this.loadEmployees();
  }

  constructor(
    public CommentDataService: CommentDataService
  ){ }

   // Issues list
   loadEmployees() {
    return this.CommentDataService.GetComments().subscribe((data: {}) => {
      this.CommentList = data;
    })
  }

    // Delete issue
    deleteComment(data){
      var index = index = this.CommentList.map(x => {return x.username}).indexOf(data.username);
       return this.CommentDataService.DeleteComment(data.id).subscribe(res => {
        this.CommentList.splice(index, 1)
         console.log('Comentario borrado exitosamente')
       })
    }

}
