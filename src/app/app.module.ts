import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

// import {StoreModule} from '@ngrx/store'

import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {DetailComponent} from './detail/detail.component';
import {MyFooter, MyHeader} from './public';
import {ListComponent} from './list/list.component';
import {LikeComponent} from './like/like.component';
import {FetchService} from './service/fetch.service';
import { ItemComponent } from './item/item.component';
import { TodoComponent } from './todo/todo.component';
import { ClockComponent } from './clock/clock.component';

// import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

@NgModule({
    declarations: [
        AppComponent,
        DetailComponent,
        MyHeader, MyFooter,
        ListComponent, LikeComponent, ItemComponent, TodoComponent, ClockComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // StoreModule.provideStore({
        //
        // }),
        // InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
        RouterModule.forRoot(routes)
    ],

    providers: [
        {provide: 'fetch', useClass: FetchService}
        // {provide: 'auth',  useClass: AuthService} provide定义了这个服务的名称，有需要注入这个服务的就引用这个名称就好。useClass指明这个名称对应的服务是一个类
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
