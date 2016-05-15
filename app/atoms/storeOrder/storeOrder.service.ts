import {Injectable} from "@angular/core";
import {Order} from "../order/order";

@Injectable()
export class StoreOrder {
    private order:Order;

    setOrder (order:Order){
        this.order = order;
        console.log("[StoreOrder] setOrder: "+JSON.stringify(order));
    }

    getOrder ():Order {
        return this.order;
    }
}
