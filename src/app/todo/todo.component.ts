import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from './todo.model';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    content:string = 'TODO...';
    todoList:Todo[] = [];

    constructor(private service: TodoService) {
    }

    ngOnInit() {
    }

    addTodo() {
        if(!this.content) return false;
        this.todoList = this.service.addTodo(this.content);
        this.content = '';
    }
}
