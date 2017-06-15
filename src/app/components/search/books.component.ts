import {Input, Component, OnInit} from '@angular/core';
import {Book} from '../../model/book.model';
@Component({
    selector: 'my-list',
    template: `
            <md-card class="example-card">
              <md-card-header>
                <div md-card-avatar class="example-header-image"></div>
                <md-card-title>Shiba Inu</md-card-title>
                <md-card-subtitle>Dog Breed</md-card-subtitle>
              </md-card-header>
              <img md-card-sm-image src="../../../assets/gotogurney.jpg">
              <md-card-content>
                <p>
                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                  bred for hunting.
                </p>
              </md-card-content>
              <md-card-actions>
                <button md-button>LIKE</button>
                <button md-button>SHARE</button>
              </md-card-actions>
            </md-card>
            `,
    styles: [`
        .example-card {
            background: #00acc1;
            border-bottom: solid 1px #0000cc;
            display: flex;
           justify-content: center; 
           align-items: center;
           
        }
        
    `]
})

export class MyList implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Input() book: Book;

   /* get title() {
        return this.book.volumeInfo.title || 123123;
    };*/
}
