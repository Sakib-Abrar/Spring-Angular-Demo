import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  username: string = "Anonymous";
  links = ['General', 'Discussion', 'Create New'];
  activeLink = this.links[0];

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.authService.username.subscribe(
      (data: string) => {
        this.username = data;
      },
      error => {
        console.log("Error in Event Emitter");
      }
    );
  }

}
