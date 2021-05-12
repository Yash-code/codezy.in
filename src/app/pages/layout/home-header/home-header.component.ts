import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  isHome = false;
  constructor() {
    this.isHome = window.location.pathname == "/home" ? true : false;
  }

  ngOnInit(): void {
  }

}
