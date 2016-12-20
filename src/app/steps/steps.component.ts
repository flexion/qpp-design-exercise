import { Component, OnInit } from '@angular/core';
import {Authentication} from '../_services/authentication';
import {User} from '../_models/user';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  currentUser: User;

  constructor(private auth: Authentication) {
  }

  ngOnInit() {
    this.auth.currentUser.subscribe(
        (user: User) => {
          this.currentUser = user;
        });
  }

}
