import {Injectable} from "@angular/core";

@Injectable()
export class StoreOrder {
    //TODO Poner el tipo que corresponda a la clase Order
    private order:any;

    //TODO Poner el tipo que corresponda al parametro de entradea
    setOrder (order:any){
        this.order = order;
    }
    //TODO Poner el tipo que corresponda de retorno
    getOrder ():any {
        return this.order;
    }
}
