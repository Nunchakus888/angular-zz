import {Component, OnInit, Input} from '@angular/core';
@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css']
})

export class MyHeader implements OnInit {
    @Input() title:string;

    constructor() {
    }

    ngOnInit() {

    }
}
