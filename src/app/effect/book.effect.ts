import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Store, Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {empty} from "rxjs/observable/empty";

import {GoldService} from '../service/gold.service';
import * as book from '../actions/book.action';

@Injectable()
export class BookEffect {
    constructor(private actions$: Actions, private getGoldIoData: GoldService) {}

    @Effect()
    search: Observable<Action> = this.actions$
        .ofType(book.ActionTypes.SEARCH)
        .debounceTime(300)
        .map(toPayload)
        .switchMap(query => {
            if(query ===''){
                return empty();
            }
            const nextSearch$ = this.actions$.ofType(book.ActionTypes.SEARCH).skip(1);
            // console.log(nextSearch$);
            /*return this.getGoldIoData.getGoldData(query)
                .takeUntil(nextSearch$)
                .catch((err)=> {
                    console.log(err)
                });*/
        })
}
