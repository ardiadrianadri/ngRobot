
import {Component,OnInit} from "@angular/core";
import {OrderComponent} from "../order/order.component";
import {Order} from "../order/order";

@Component({
    selector: "ng-robot-palette",
    directives: [OrderComponent],
    templateUrl: "atoms/palette/palette.html",
    inputs: ['orders']
})
export class PaletteComponent implements OnInit{

    orders: Array<Order>;
    constructor(){

    }

    ngOnInit(){
    }

    public onItemTap($event){
        console.log("Tapping: ");
    }

    delete(item){
        console.log("Deleting something");
    }
}
