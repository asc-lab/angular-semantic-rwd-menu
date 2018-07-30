import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-mobile-items',
  templateUrl: './menu-mobile-items.component.html',
  styleUrls: ['./menu-mobile-items.component.css']
})
export class MenuMobileItemsComponent implements OnInit {

  @Input('sidebar')
  sidebar: any;

  constructor() {
  }

  ngOnInit() {
  }

  logout() {
    this.sidebar.toggle();
    alert('Logout logic not implemented yet!');
  }
}
