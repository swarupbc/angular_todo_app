import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First ToDo',
        completed: false,
      },
      {
        content: 'Second ToDo',
        completed: true,
      }
    ]
  }
  inputTodo: string = "";

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteToDo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addToDo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    })

    this.inputTodo = "";
  }

}
