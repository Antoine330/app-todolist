import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-todolist';
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = "http://localhost:4200/tasks";
   }

   editTask(task: Task) : Observable<Task> {
    return this.http.put<Task>(this.serviceURL + '/'+ task.title, task);
   }

}
