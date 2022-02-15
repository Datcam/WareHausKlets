import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  previousTarget: any;

  constructor() { }

  ngOnInit(): void {
  }

  addClass(event: any) {
    if (this.previousTarget) {
      this.previousTarget.className = ''
    }
    this.previousTarget = event.target;
    event.target.className = 'active';
  }

}
