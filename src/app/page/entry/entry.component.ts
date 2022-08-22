import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}