import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {DetailComponent} from './detail/detail.component';
import {MyFooter, MyHeader} from './public';
import {ListComponent} from './list/list.component';
import {LikeComponent} from './like/like.component';


@NgModule({
    declarations: [
        AppComponent,
        DetailComponent,
        MyHeader, MyFooter,
        ListComponent, LikeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
