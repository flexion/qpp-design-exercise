import { Component, OnInit } from '@angular/core';

import { Practice } from '../practice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  practices = [
    new Practice(18, 'practice 2', '32234234234', 'pending'),
    new Practice(19, 'practice 3', '32234234234', 'approved'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
