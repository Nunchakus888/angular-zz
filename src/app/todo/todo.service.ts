import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {Todo} from './todo.model';

@Injectable()
export class TodoService {
    todoList:Todo[] = [];

    constructor() {
    }

    addTodo(str:string):Todo[] {
        let todos = {
            id: UUID.UUID(),
            content: str,
            completed: false
        };
        this.todoList.push(todos);
        return this.todoList;
    }

}
