import {Component, OnInit} from '@angular/core';
import {RailsService} from './rails.service';
import {StoreOrder} from '../storeOrder/storeOrder.service'
import {Order} from "../order/order";
import {OrderComponent} from "../order/order.component";
import {HTTP_PROVIDERS} from "@angular/http";


@Component({
    selector:'ng-robot-rails',
    templateUrl:'atoms/rails/rails.template.html',
    styleUrls:['atoms/rails/rails.style.css'],
    providers:[RailsService, StoreOrder, HTTP_PROVIDERS],
    directives:[OrderComponent]
})
export class NgRailsComponent implements OnInit{

    orderStack:Order[];
    
    constructor(
        private _railsService: RailsService,
        private _storeOrder: StoreOrder
    ){}
    
    ngOnInit(){
        console.log ('Inicializando el controlador');
        //orderStack = railsService.getStack();
        let order1 = new Order();
        let order2 = new Order();
        let order3 = new Order();
        let order4 = new Order();
        let order5 = new Order();
        
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

        this.orderStack = [order1,order2,order3,order4,order5];
        console.log('Contenido de orderStack: ' + JSON.stringify(this.orderStack));
    }

    addOrder(){
        let order:Order = this._storeOrder.getOrder();
        if (order){
            this._railsService.putOrder(order);
        }
        
        this.orderStack = this._railsService.getStack();
    }
}