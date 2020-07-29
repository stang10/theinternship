import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: boolean = true

  constructor(private route: Router){}

  ngOnInit(): void {
  }

  homeTab() {
    this.home = true;
  }

  castTab() {
    this.home = false;
  }
}
