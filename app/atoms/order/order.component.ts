import {Component,OnInit} from "@angular/core";
import {Order} from "./order";
import {StoreOrder} from "../storeOrder/storeOrder.service";

@Component({
	selector: "ng-robot-order",
		providers: [StoreOrder],
		templateUrl: "atoms/order/order.html",
		inputs: ['orders']
})
export class OrderComponent implements OnInit {
  private orders: Array<Order>;

  constructor(private storeOrder: StoreOrder) { }

		ngOnInit(){

		}

		onItemTap(item){
			console.log("Item tapped: "+JSON.stringify(item));
			let newOrder = new Order(item.value, item.image);
      this.storeOrder.setOrder(newOrder);
			//TODO: Utilizar el servicio StoreOrder para hacer un set de la orden
		}

		/* Ejemplo de uso

		--HTML--:
		 <ng-robot-order [orders]="orderList"></ng-robot-order>

	--COMPONENT--:
	orderList:Array<Order> = [];

		ngOnInit(){
				let obj = new Order();
				obj.value = "up";
				obj.image = "~/images/up.png";
				let obj2 = new Order();
				obj2.value = "left";
				obj2.image = "~/images/left.png";
				let obj3 = new Order();
				obj3.value = "right";
				obj3.image = "~/images/right.png";
				let obj4 = new Order();
				obj4.value = "eye";
				obj4.image = "~/images/eye.png";
				let obj5 = new Order();
				obj5.value = "speaker";
				obj5.image = "~/images/speaker.png";
				this.orderList.push(obj);
				this.orderList.push(obj2);
				this.orderList.push(obj3);
				this.orderList.push(obj4);
				this.orderList.push(obj5);
		}*/

}
*/