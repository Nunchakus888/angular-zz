import {Action} from '@ngrx/store';
import * as book from '../actions/book.action';

export interface State {
    id:string[];
    loading:boolean;
    query:string;
}

const initialState:State = {
    id: [],
    loading: false,
    query: ''
};

export function SearchBookReducer(state:State = initialState, action:book.SearchAction): State {
    console.log('search-reducer--->', state, action);
    switch (action.type) {
        case book.ActionTypes.SEARCH:
            const query = action.payload;
            if(query === '') {
                return {
                    id: [],
                    loading: false,
                    query,
                };
            }

            /*
            * Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。
            * 它将返回目标对象。
            * Object.assign(target, ...sources)
            * */
            return Object.assign({}, state, {query, loading: true});
        default :
            return state;
    }
}