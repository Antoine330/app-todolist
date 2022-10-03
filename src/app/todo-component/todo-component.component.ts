import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Task } from '../Task';
import { Router } from '@angular/router';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { Observable, of } from 'rxjs';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  showTasks: Task[] = [];
  tasks: Task[] = [];
  newTask: string;
  newDescription: string;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.tasks = [
      {
        id: 1,
        title: 'First todo',
        done: false,
        description: 'Première description'
      },
      {
        id: 2,
        title: 'Second todo',
        done: false,
        description: 'Deuxième description'
      }
    ]
  }

  addTask() {
    if (this.newTask) {
      let task = new Task();
      let n: number = 2;
      task.id = ++n;
      task.title = this.newTask;
      task.done = false;
      task.description = this.newDescription;
      this.tasks.unshift(task);
      this.newTask = '';
      this.newDescription = '';
    } else {
      alert('You need to enter a task ! ');
    }
  }

  state(id: number) {
    const checkbox = document.getElementById(
      'check',
    ) as HTMLInputElement | null;
    if (checkbox?.checked) {
      this.tasks[id].done = !this.tasks[id].done;
      this.tasks.push(this.tasks[id]);
      this.tasks = this.tasks.filter((v, i) => i !== id);
    } else {
      this.tasks[id].done = !this.tasks[id].done;
    }
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
  }

  show(id: number) {
    let n: number = 2;
    this.showTasks = [
      {
        id: n++,
        title: this.tasks[id].title,
        done: this.tasks[id].done,
        description: this.tasks[id].description,
      }
    ]
    //this.route.navigate(['task/' + id, this.showTasks]);
  }

  getT(id: number) {
    let n: number = 2;
    this.showTasks = [
      {
        id: n++,
        title: this.tasks[id].title,
        done: this.tasks[id].done,
        description: this.tasks[id].description
      }
    ]
  }

  getTodo(id: string) {
    return this.tasks.find(task => task.id === id);
  }


}
