import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material'

// import {RouterStoreModule} from '@ngrx/router-store'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'


import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {DetailComponent} from './components/detail/detail.component';
import {MyFooter, MyHeader} from './components/public';
import {MyInput} from './components/input/input.component';
import {MyList} from './components/search/books.component';
import {ListComponent} from './components/list/list.component';
import {LikeComponent} from './components/like/like.component';
import {FetchService} from './service/fetch.service';
import {ItemComponent} from './components/item/item.component';
import {TodoComponent} from './components/todo/todo.component';
import {ClockComponent} from './components/clock/clock.component';

import {TodoReducer} from './reducers/todo.reducer';
import {SearchBookReducer} from './reducers/search.reducer';
import {SearchComponent} from './components/search/search.component';

import {GoldService} from './service/gold.service';
import {BookEffect} from './effect/book.effect';

@NgModule({
    declarations: [
        AppComponent,
        DetailComponent,
        MyHeader, MyFooter, MyInput, MyList,
        ListComponent, LikeComponent, ItemComponent, TodoComponent, ClockComponent, SearchComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        StoreModule.provideStore(TodoReducer),
        EffectsModule.run(BookEffect),
        RouterModule.forRoot(routes, {useHash: true}),
        /**
         * @ngrx/router-store keeps router state up-to-date in the store and uses
         * the store as the single source of truth for the router's state.
         */
        // RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ],

    providers: [
        {provide: 'fetch', useClass: FetchService},
        GoldService,
        // {provide: 'auth',  useClass: AuthService} provide定义了这个服务的名称，有需要注入这个服务的就引用这个名称就好。useClass指明这个名称对应的服务是一个类
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}