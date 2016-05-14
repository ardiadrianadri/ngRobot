export class Rails {
    private orders:any[];
    
    addOrder(order:any){
        this.orders.push(order);
    }
    
    popOrder(){
        let order = this.orders.pop();
        order.run();
    }
}