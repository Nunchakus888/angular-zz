export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const FETCH_FROM_API = 'FETCH_FROM_API';

import {Action} from '@ngrx/store';
export class AddTodoAction implements Action {
    type: string = 'ADD_TODO';
    constructor(public payload: string){}
}

export type Actions = AddTodoAction;