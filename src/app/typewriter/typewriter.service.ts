import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  constructor() { }

  writer(text: string, speed: number = 50) {
    return new Observable<string>(o => {
      let i = 0; 

      setInterval(() => {
        o.next(text.charAt(i++));
      }, 50)
    });
  }

  deleter() { }
}
