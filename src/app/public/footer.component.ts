import{Component} from '@angular/core';
// import {ReflectiveInjector} from '@angular/core';
// import {NgFor} from '@angular/common';


@Component({
    selector: 'my-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['footer.component.css'],
    // directives: [NgFor],
})

export class MyFooter {
    menuList = [
        {url: 'list', title: '列表'},
        {url: 'like', title: '收藏'},
        {url: 'clock', title: 'clock'},
        {url: 'todo', title: 'ToDo..'}
        ];

    constructor() {
    }
}
