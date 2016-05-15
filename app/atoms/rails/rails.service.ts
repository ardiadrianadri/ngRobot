import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Rails} from "./rails";
import {Order} from "../order/order";
import {Config} from "../config/config";

@Injectable()
export class RailsService {
    _rail:Rails;
    _http:Http;

    response:any;
    error:any;

    putOrder (order:Order){
        this._rail.orders.push(order);
    }
    
    popOrder():Observable<any> {
        return this._http.post(Config.backService.url, JSON.stringify(this._rail.orders))
            .map(response=>this.response = response)
            .catch(error=>this.error = error);
    }
    
    getStack (){
        return this._rail.orders;
    }

}