import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'my-input',
    template:
        `
        <div>
            <input type="text" autofocus [(ngModel)]="content" (keyup.enter)="inputSomething.emit($event.target.value)"/>
        </div>`,
    styles: [
        `input {
            background: #1d94bb;
            height: 35px;
            width: 200px;
        }

        div {
            text-align: center;
            margin-bottom: 20px;
        }
        `
    ]
})
export class MyInput implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Input() content: string = 'Angular';
    @Output() inputSomething = new EventEmitter<string>();

}
