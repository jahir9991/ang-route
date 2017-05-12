import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   projectName: string;

  constructor() {

  }

  ngOnInit() {
    this.projectName = 'my website';
  }

}
