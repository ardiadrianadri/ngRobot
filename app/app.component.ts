
import {Component,OnInit} from "@angular/core";
import {Order} from "./atoms/order/order";
import {OrderComponent} from "./atoms/order/order.component";
import {PaletteComponent} from "./atoms/palette/palette.component";

@Component({
    selector: "my-app",
    directives: [PaletteComponent,OrderComponent],
    template: `
    <ng-robot-order [orders]="orderList"></ng-robot-order>
`,
})
export class AppComponent implements OnInit{
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
    }
}
