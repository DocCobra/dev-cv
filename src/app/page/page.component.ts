import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TypewriterService } from '../typewriter/typewriter.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  typewriterText: string = '';   
  waitTime: number = 1600; 

  constructor(private typewriterSvc: TypewriterService) { }

  ngOnInit(): void {
    let i = 0; 
    const strings = [
      "Full Stack Developer",
      "HTML5 | CSS3 | JS/TS | Angular 2+",
      "PHP | Node | SQL",
      "C# | Unity | Unreal Engine | VR/AR"
    ]; 

    this.twWrite(strings, i); 
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
