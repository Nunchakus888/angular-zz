/**
 *
 *
 X-LC-Id:mhke0kuv33myn4t4ghuid4oq2hjj12li374hvcif202y5bm6
 X-LC-Sign:f309256e81af26bb11e84fe83b4865d5,1497194663160
 X-LC-UA:AV/js1.5.4
 https://api.leancloud.cn/1.1/search/select?&include=user&limit=20&clazz=Entry&q=angular

 */

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../model/book.model';
@Injectable()
export class GoldService {
    constructor(private http: Http) {}
    private api_url = ' https://api.leancloud.cn/1.1/search/select?&include=user&limit=20&clazz=Entry';//&q=angular
    private headers = new Headers({
        'Content-Type': 'application/json',
        'charset': 'utf-8',
        'X-LC-Id': 'mhke0kuv33myn4t4ghuid4oq2hjj12li374hvcif202y5bm6',
        'X-LC-Sign':'f309256e81af26bb11e84fe83b4865d5,1497194663160',
        'X-LC-UA':'AV/js1.5.4'
    });

    getGoldData(query: string): void {
        this.http.get(`${this.api_url}&${query}`, {headers: this.headers})
            .map(res=>{
                console.log(res);
            });
    }
}