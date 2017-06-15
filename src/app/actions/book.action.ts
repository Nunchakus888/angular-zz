import {Action} from '@ngrx/store';
import {Book} from '../model/book.model';
import {Todo} from '../model/todo.model';

export const ActionTypes = {
    SEARCH: 'SEARCH',
    SELECTED: 'SELECTED',
    ADD_TODO: 'ADD_TODO'
};

export class SearchAction implements Action {
    type: 'SEARCH';
    constructor(public payload: string) {}
}

export class AddTodoAction implements Action {
    type: 'ADD_TODO';
    constructor(public payload: Todo[]) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = SearchAction | AddTodoAction;