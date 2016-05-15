import {Component,OnInit} from "@angular/core";
import {Order} from "./order";
import {StoreOrder} from "../storeOrder/storeOrder.service";

@Component({
	selector: "ng-robot-order",
  	providers: [StoreOrder],
  	templateUrl: "atoms/order/order.html",
  	inputs: ['value']
})
export class OrderComponent implements OnInit{
	private order: Order;
	imageDir: string = "~/images/";
	value: string;

	constructor(private _storeOrder: StoreOrder){		
	}

	ngOnInit() {
		this.order = new Order();
		this.order.value = this.value;
		this.order.image = this.imageDir+this.value+".png";	
  	}

  	public onTap(){
  		this._storeOrder.setOrder(this.order);
  	}


}
