import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_data;
  test_data;

  constructor(public userService:UserService) { 
    this.userService._user_data.subscribe((value) => {
      this.user_data = value
    }); 
    
  }

  ngOnInit() {
    
  }

}
