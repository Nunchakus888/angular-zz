import {Input, Component, OnInit} from '@angular/core';
import {Book} from '../../model/book.model';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as BookActions from '../../actions/book.action';
import {State} from '../../reducers/search.reducer';

@Component({
    selector: 'app-search',
    template: `
            <my-header title="Search.."></my-header>
            <my-input (inputSomething)="inputSomething($event)"></my-input>
            <my-list *ngFor="let item of bookList" [book]="item"></my-list>`
})

export class SearchComponent implements OnInit {
    @Input() bookList = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];

    constructor(private store:Store<State>) {
    }

    ngOnInit() {
    }

    inputSomething(value: string) {
        console.log(this.store);
        this.store.dispatch(new BookActions.SearchAction(value));
    }

}
