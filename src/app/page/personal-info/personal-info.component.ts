import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  nameText: string = 'Daniele Torrini'; 

  hideEmail: boolean = true; 
  email: string = 'email@example.com'; 

  constructor() { }

  ngOnInit(): void { }
  
  revealEmail(): void {
    const p1 = 'eleinad';
    const p2 = 'inirrot'; 
    const p3 = 'gro'; 

    this.email = p1.split('').reverse().join('') + '@' + p2.split('').reverse().join('') + '.' + p3.split('').reverse().join(''); 
    this.hideEmail = false; 
  }
}
