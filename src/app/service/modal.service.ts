import {Injectable} from '@angular/core';

@Injectable()
export class ModalService {

    public state: string = 'none';

    public message: string = "警告";

    public title: string = "您的操作可能存在一些问题。";

    public pop({title, message}) {
        this.title = title;
        this.message = message;
        this.state = 'block';
    }

    public hide() {
        this.state = 'none';
    }

    constructor() {
    }

}
