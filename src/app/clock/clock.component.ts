import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'app-clock',
    template: '<h1>{{clock | async}}</h1>',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

    clock = Observable.interval(1000);

    constructor() {
        this.clock.subscribe(console.log.bind(console));
    }

    ngOnInit() {
        console.log(this.clock)
    }

    ngOnDestroy() { // 组件销毁时取消订阅，以避免潜在的内存泄漏
        console.log('destroy~~~')
    }

}
