import { Injectable } from '@angular/core';

import { Observable, repeat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  constructor() { }

  writer(text: string, writeSpeed: number = 50): Observable<string> {
    return new Observable<string>(o => {
      let i = 0; 

      setInterval(() => {
        o.next(text.charAt(i++));
        if (text.length === i) o.complete(); 
      }, writeSpeed)
    });
  }

  deleter(text: string, writeSpeed: number = 50): Observable<string> {
    return new Observable<string>(o => {
      let i = text.length; 

      setInterval(() => {
        o.next(text.slice(0, --i)); 
        if (i <= 0) o.complete(); 
      }, writeSpeed)
    }); 
  }
}
