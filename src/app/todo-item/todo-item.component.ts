import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// предназначен для создания объектов, способных генерить события, //
// так же эти объекты предоставляют интерфейс для подписки на эти события //
import { Todo } from '../shared/todo';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle.emit(this.todo);
  }
  onDelete() {
    this.delete.emit(this.todo);
  }
}
