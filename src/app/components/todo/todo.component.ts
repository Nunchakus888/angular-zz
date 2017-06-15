import {Input, Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from '../../model/todo.model';
import {Action, Store} from '@ngrx/store';
import * as TodoActions from '../../actions/todo.action';
import {Observable} from 'rxjs/observable';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    @Input() content:string;
    todoList:Todo[];

    constructor(private store$: Store<Todo>, private service: TodoService) {
    }

    ngOnInit() {
    }

    inputSomething(value) {
        if(!value) return false;
        this.todoList = this.service.addTodo(value);
        this.content = '';
        console.log('action-->', value);
        this.store$.dispatch(new TodoActions.AddTodoAction(value));
    }
};
