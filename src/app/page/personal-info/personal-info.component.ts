import { Component, OnInit } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  nameText: string = 'Daniele Torrini'; 

  hideEmail: boolean = true; 
  email: string = 'email@example.com'; 

  smallScreen: boolean = false; 

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void { 
    this.breakpointObserver.observe([
      '(max-width: 630px)'
    ]).subscribe(state => {
      this.smallScreen = state.matches ? true : false; 
    });
  }

  fix(s: string): string {
    return s.split('').reverse().join('');
  }
  
  revealEmail(): void {
    const p1 = 'eleinad';
    const p2 = 'inirrot'; 
    const p3 = 'gro'; 

    this.hideEmail = false; 
    this.email = [
      this.fix(p1),
      '@',
      this.fix(p2),
      '.',
      this.fix(p3)
    ].join(''); 
  }
}
