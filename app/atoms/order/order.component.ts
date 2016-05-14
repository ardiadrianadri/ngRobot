import {Component} from "@angular/core";
import {Order} from "./order";
import {StoreOrder} from "../storeOrder/storeOrder.service";

@Component({
	selector: "ng-robot-order",
  	providers: [StoreOrder],
  	templateUrl: "atoms/order/order.html"
  	//styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class OrderComponent{
	order: Order;
	imageDir: string = "~/images/";

	constructor(private _storeOrder: StoreOrder){
		this.order = new Order();
		this.order.value = "forward.png";
		this.order.image = this.imageDir +"forward.png";		
	}
}
