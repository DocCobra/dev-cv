import { Component, OnInit } from '@angular/core';

import { TypewriterService } from '../typewriter/typewriter.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  typewriterText = '';   

  constructor(private typewriterSvc: TypewriterService) { }

  ngOnInit(): void {
    this.typewriterSvc.writer("alberto saverio roberto antani leonardo lorenzo").subscribe(
      (text: string) => {
        this.typewriterText += text; 
      }
    ); 
  }
}
