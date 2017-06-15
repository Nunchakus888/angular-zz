import {Action, Store} from '@ngrx/store';
import {Todo} from '../model/todo.model';
import {ADD_TODO, REMOVE_TODO} from '../actions/todo.action';

export const TodoReducer = (state: Todo[] = [], action: Action) => {
    console.log('todo--reducer-->');
    console.log(state, action);
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_TODO:
            return state.filter(i => i.content !== action.payload);
        default:
            return state;
    }
};
