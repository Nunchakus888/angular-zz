import {Inject, Component, Input, SimpleChanges, OnChanges} from '@angular/core';

@Component({
    selector: 'like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnChanges {
    // @Input()
    content: string = 'TODO...';
    todoList: any = [];

    constructor(@Inject('fetch') private service) {
    }

    addTodo() {
        this.todoList.push(this.content);
        console.log(this.content);
        // console.log(this, 'fetch-data--->', this.service.fetchData(this.username, this.password));
    }

    /*当数据绑定输入属性的值发生变化的时候，Angular 将会主动调用 ngOnChanges 方法。它会获得一个 SimpleChanges 对象，包含绑定属性的新值和旧值，它主要用于监测组件输入属性的变化。*/
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

}
