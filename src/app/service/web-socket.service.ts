import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'

@Injectable()
export class WebSocketService {

    private webSocket: WebSocket;

    constructor() {
    }

    public createObservableSocket(url: string): Observable<any> {
        this.webSocket = new WebSocket(url);
        return new Observable(observe => {
            this.webSocket.onmessage = function (event) {
                observe.next(event.data);
            }
            this.webSocket.onerror = function (error) {
                observe.error(error);
            }
            this.webSocket.onclose = function (event) {
                observe.complete();
            }
        });
    }

    public sendMessage(msg:string) {
        this.webSocket.send(msg);
    }

}
