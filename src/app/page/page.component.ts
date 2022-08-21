import { Component, OnInit } from '@angular/core';

import { TypewriterService } from '../typewriter/typewriter.service';

import { Entries, TypewriterStrings } from 'src/assets/entries';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  typewriterText: string = '';   
  waitTime: number = 1600; 

  twStrings = TypewriterStrings; 
  entries = Entries; 

  constructor(private typewriterSvc: TypewriterService) { }

  ngOnInit(): void {
    let i = 0; 

    this.twWrite(this.twStrings, i); 
  }

  twWrite(strings: string[], index: number): void {
    this.typewriterSvc.writer(strings[index]).subscribe({
      next: (text: string) => { this.typewriterText += text; },
      complete: () => setTimeout(() => { 
        this.twDelete(strings, index); 
      }, this.waitTime) 
    }); 
  }

  twDelete(strings: string[], index: number): void {
    this.typewriterSvc.deleter(strings[index], 35).subscribe({
      next: (text: string) => { this.typewriterText = text; },
      complete: () => setTimeout(() => {
        if (++index >= strings.length) index = 0; 
        this.twWrite(strings, index);
      }, this.waitTime / 2) 
    }); 
  }
}
