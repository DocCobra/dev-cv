import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BreakpointObserver } from '@angular/cdk/layout';  

export type LayoutType = 'small' | 'large'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CV | Daniele Torrini';

  menuLayout: LayoutType = 'large'; 
  
  constructor(private titleSvc: Title, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.titleSvc.setTitle(this.title); 

    this.breakpointObserver.observe([
      '(max-width: 1350px)'
    ]).subscribe(state => {
      if (state.matches) {
        this.menuLayout = 'small'; 
      }
      else {
        this.menuLayout = 'large'; 
      }
    });
  }
}
