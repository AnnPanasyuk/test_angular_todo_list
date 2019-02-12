import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.todoService.createTodo(this.title);
  }
}
