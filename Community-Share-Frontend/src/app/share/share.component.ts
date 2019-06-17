import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  username: string = "Anonymous";

  constructor(private authService:AuthenticationService) { }

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
  displayedColumns = ['datetime', 'username', 'shared'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  datetime: string;
  username: string;
  shared: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {datetime: '1', username: 'Hydrogen', shared: 'Hay day'},
  {datetime: '2', username: 'Helium', shared: 'Hello may day '},
  {datetime: '3', username: 'Lithium', shared: 'Lithium'},
  {datetime: '4', username: 'Beryllium', shared: 'Be'},
  {datetime: '5', username: 'Boron', shared: 'B'},
  {datetime: '6', username: 'Carbon', shared: 'C'},
  {datetime: '7', username: 'Nitrogen', shared: 'N'},
  {datetime: '8', username: 'Oxygen', shared: 'O'},
  {datetime: '9', username: 'Fluorine', shared: 'F'},
  {datetime: '10', username: 'Neon', shared: 'Ne'},
];

