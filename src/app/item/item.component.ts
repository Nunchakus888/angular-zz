import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    @Input() item: any;
    constructor() {
    }

    ngOnInit() {

    }

}
