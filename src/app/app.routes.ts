import {Routes} from '@angular/router';
import {DetailComponent} from './components/detail/detail.component';
import {ListComponent} from './components/list/list.component';
import {LikeComponent} from './components/like/like.component';
import {TodoComponent} from './components/todo/todo.component';
import {ClockComponent} from './components/clock/clock.component';
import {SearchComponent} from './components/search/search.component';

export const routes:Routes = [
    {path: '', redirectTo: 'like', pathMatch: 'full'},
    //{path: '**', component: ListComponent},//这个..慎用
    {path: 'list', component: ListComponent},
    {path: 'like', component: LikeComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'clock', component: ClockComponent},
    {path: 'search', component: SearchComponent},
    {path: 'details', component: DetailComponent}
];
