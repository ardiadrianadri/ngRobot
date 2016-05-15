import {Inject} from "@angular/core";
import {NativeWebSockets} from "nativescript-websockets";
import {Rails} from "./rails";
import {Order} from "../order/order";

@Inject()
export class RailsService {
    _rail:Rails;
    _ws: NativeWebSockets;

    _onOpen (socket:any){
        socket.send(this._rail.pop().value);
    }

    _onMessage(socket:any, message:any){
        let order:Order = this._rail.pop();
        if ((message) && (order) && (message === 'OK')){
            socket.send(order.value);
        } else {
            this._ws.close(Config.websocketConfig.code.noMoreOrders, 'No more Orders');
        }
    }

    _onClose(socket:any, code:any, reason:any){
        console.log('Socket closed: '+ code + ', rason: '+ rason);
    }

    _onError(socket:any, error:any){
        console.log ('Socket error: ' +error);
    }
    putOrder (order:Order){
        this._rail.put(order);
    }
    
    popOrder(){
        if (!this._ws){
            this._ws = new NativeWebSockets(Config.websocketConfig.url, Config.websocketConfig.params);
        }

        this._ws.on('open',this._onOpen);
        this._ws.on('message',this._onMessage);
        this._ws.on('close',this._onClose);
        this._ws.on('error',this._onError);

        this._ws.open();
    }
}