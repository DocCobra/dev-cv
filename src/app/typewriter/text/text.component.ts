import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'typewriter-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TypewriterTextComponent implements OnInit {
  @Input('text') typewriterText: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }
}
