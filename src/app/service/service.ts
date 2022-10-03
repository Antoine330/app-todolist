import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class Service {

    t: Task[] = [];
  constructor () { }


  getTodo(id: string) {
    return this.t.find(task => task.id === id);
  }
}
