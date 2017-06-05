import {Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {LikeComponent} from './like/like.component';


export const routes:Routes = [
    {
        path: '',
        redirectTo: 'like',
        pathMatch: 'full'
    },
    {
        path: '**', //default
        component: LikeComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'like',
        component: LikeComponent
    },
    {
        path: 'details',
        component: DetailComponent
    }
];
