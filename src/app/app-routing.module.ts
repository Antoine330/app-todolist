import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  
  { path: '', redirectTo: '/task', pathMatch: 'full' },
  { path: 'task', component: TodoComponentComponent },
  { path: 'task/:id', component: TodoDetailComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
