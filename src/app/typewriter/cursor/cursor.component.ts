import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'typewriter-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit, OnDestroy {
  cursor = '_';
  cursorBlinkTime = 800; 

  cursorBlink: any; 
  cursorDisplay: boolean = true; 
  cursorVisibility = 'visible'; 

  constructor() { }

  ngOnInit(): void {
    this.cursorBlink = setInterval(() => { 
      this.cursorVisibility = this.cursorDisplay ? 'visible' : 'hidden'; 
      this.cursorDisplay = !this.cursorDisplay; 
    }, this.cursorBlinkTime) 
  }

  ngOnDestroy(): void {
    clearInterval(this.cursorBlink); 
  }
}
