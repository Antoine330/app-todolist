import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
