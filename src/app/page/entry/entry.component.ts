import { Component, OnInit, Input } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input('title') entryTitle: string = '';  
  @Input('content') entryContent: string = ''; 
  @Input('startDate') entryStartDate: string = '';
  @Input('endDate') entryEndDate: string = ''; 

  largeTitle: boolean = false; 
  smallScreen: boolean = false; 

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    if (this.entryTitle.length >= 30) this.largeTitle = true; 
    
    this.breakpointObserver.observe([
      '(max-width: 630px)'
    ]).subscribe(state => {
      this.smallScreen = state.matches ? true : false; 
    });
  }
}