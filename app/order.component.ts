import {Component} from "@angular/core";
import {Order} from "order";
//import {StoreOrder} from "./atoms/storeOrder/storeOrder.service"

@Component({
	selector: "ng-robot-order",
  	providers: [StoreOrder],
  	templateUrl: "order.html",
  	//styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class OrderComponent{
	order: Order;

	constructor(private _order: String, private _storeOrder: StoreOrder){
		this.order = new Order();
		this.order.value = _order;
		
	}
}
