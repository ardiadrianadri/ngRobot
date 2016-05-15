"use strict";
var core_1 = require("@angular/core");
var StoreOrder = (function () {
    function StoreOrder() {
    }
    //TODO Poner el tipo que corresponda al parametro de entradea
    StoreOrder.prototype.setOrder = function (order) {
        this.order = order;
    };
    //TODO Poner el tipo que corresponda de retorno
    StoreOrder.prototype.getOrder = function () {
        return this.order;
    };
    StoreOrder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StoreOrder);
    return StoreOrder;
}());
exports.StoreOrder = StoreOrder;
//# sourceMappingURL=storeOrder.service.js.map