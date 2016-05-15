import {Component, OnInit} from '@angular/core';
import {RailsService} from 'rails.service';
import {StoreOrder} from '../storeOrder/storeOrder.service'
import {Order} from "../order/order";
import {OrderComponent} from "../order/order.component";


@Component({
    selector:'ng-robot-rails',
    templateUrl:['atoms/rails/rails.component.html'],
    styleUrls:['atoms/rails/rails.component.css'],
    providers:[RailsService, StoreOrder],
    directives:[OrderComponent]
})
export class NgRailsComponent implements OnInit{

    orderStack:order[];
    
    constructor(
        private _railsService: RailsService,
        private _storeOrder: StoreOrder
    ){}
    
    ngOnInit(){
        //orderStack = railsService.getStack();
        let order1 = new Order();
        let order2 = new Order();
        let order3 = new Order();
        
        order1.value="up";
        order2.value="right";
        order3.value="left";
        order4.value="speaker";
        order5.value="eye";
        
        order1.image="~/images/"+order1.value+".png";
        order2.image="~/images/"+order2.value+".png";
        order3.image="~/images/"+order3.value+".png";
        order4.image="~/images/"+order4.value+".png";
        order5.image="~/images/"+order5.value+".png";
        
        orderStack = [order1,order2,order3,order4,order5];
    }

    addOrder(){
        let order:Order = this._storeOrder.getOrder();
        if (order){
            this._railsService.putOrder(order);
        }
        
        this.orderStack = _railsService.getStack();
    }
}