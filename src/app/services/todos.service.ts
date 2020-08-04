import { Injectable } from "@angular/core";
import { Todo } from "../app.component";

@Injectable({providedIn: 'root'})

export class TodosService {

  todos: Todo[] = [
    {id: 1, title: 'Купить хлеб', completed: false, date: new Date()},
    {id: 2, title: 'Купить веревку', completed: false, date: new Date()},
    {id: 3, title: 'Купить мыло', completed: false, date: new Date()},
  ]

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
