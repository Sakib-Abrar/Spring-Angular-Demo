import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  username: string = "Anonymous";

  displayedColumns = ['date', 'sharedBy', 'postText'];
  posts: Post[];
  showTable:boolean = false;

  recipientList: string[] = [];

  shareForm = this.fb.group({
    postText: [""],
    sharedBy: [""],
    files: [],
    all:[""],
    self:[""],
    recipients:[""],
    temp:[""]
  });

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private authService:AuthenticationService,
    private postService:PostService) 
    { 
    }

  ngOnInit() {
    this.authService.username.subscribe(
      (data: string) => {
        this.username = data 
      },
      error => {
        console.log("Error in Event Emitter");
      }
    );
  }

  showPosts() {
    this.postService.getPosts()
      .subscribe((data: Post[]) =>{
        if(data != null)
          this.posts = { ...data };
        else
          this.showTable = false;
        }
      );
  }

  addRecipient(){
    this.recipientList.push(this.shareForm.controls.temp.value);
    this.shareForm.controls.temp.setValue("");
    this.shareForm.controls.recipients.setValue(this.recipientList);
  }

  onShare(template: TemplateRef<any>){
    console.log(this.shareForm.getRawValue());
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

