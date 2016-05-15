"use strict";
var core_1 = require("@angular/core");
var order_1 = require("./order");
var storeOrder_service_1 = require("../storeOrder/storeOrder.service");
var OrderComponent = (function () {
    function OrderComponent(_storeOrder) {
        this._storeOrder = _storeOrder;
        this.imageDir = "~/images/";
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.order = new order_1.Order();
        this.order.value = this.value;
        this.order.image = this.imageDir + this.value + ".png";
    };
    OrderComponent.prototype.onTap = function () {
        this._storeOrder.setOrder(this.order);
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: "ng-robot-order",
            providers: [storeOrder_service_1.StoreOrder],
            templateUrl: "atoms/order/order.html",
            inputs: ['value']
        }), 
        __metadata('design:paramtypes', [storeOrder_service_1.StoreOrder])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map