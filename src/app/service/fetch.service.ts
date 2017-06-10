import {Injectable} from '@angular/core';

@Injectable()
export class FetchService {

    constructor() {
    }

    fetchData(username: string, password: string): boolean {
        if(username && password){
            return true;
        }
        return false;
    }

}
