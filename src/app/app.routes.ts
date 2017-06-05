import {Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {LikeComponent} from './like/like.component';

export const routes:Routes = [
    {path: '', redirectTo: 'like', pathMatch: 'full'},
    //{path: '**', component: ListComponent},//这个鬼东西害的劳资路由一直不能用
    {path: 'list', component: ListComponent},
    {path: 'like', component: LikeComponent},
    {path: 'details', component: DetailComponent}
];
