import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Task } from '../Task';
import { TodoComponentComponent } from '../todo-component/todo-component.component';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class TodoDetailComponent implements OnInit {

  //task_: Observable<Task>;
  task_!: Task;
  task: any;
  taskId: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private service: TodoComponentComponent,
    private t: Task
  ) { }

  ngOnInit(): void {

    /* this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const taskId = paramMap.get('id');
      this.task = this.service.getTodo(taskId!);
    }); */
    /* this.taskId = this._route.snapshot.paramMap.get('id');
    this.task = this.service.getTodo(this.taskId);
    console.log(this.task); */
    
    
  }

  handleBack() {
    this._router.navigateByUrl('/');
  }
}
