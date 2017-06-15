import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    concatList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

    constructor(private router: Router) {
    }

    ngOnInit() {
        // setTimeout(() => {
        //     this.router.navigate(['/like']);
        // }, 5000);
    }

}
