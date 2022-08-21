import { Component, OnInit, Input } from '@angular/core';

import { LayoutType } from '../app.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input() layout: LayoutType = 'large'; 

  constructor() { }

  ngOnInit(): void {
  }
}
