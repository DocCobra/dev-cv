import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-divider',
  templateUrl: './section-divider.component.html',
  styleUrls: ['./section-divider.component.css']
})
export class SectionDividerComponent implements OnInit {
  @Input('title') sectionTitle: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }
}
