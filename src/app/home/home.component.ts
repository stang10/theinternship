import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page: string = "home"

  constructor(private route: Router){}

  ngOnInit(): void {
  }

  homeTab() {
    this.page = "home";
  }

  castTab() {
    this.page = "cast";
  }
}
