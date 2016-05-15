"use strict";
var core_1 = require("@angular/core");
var StoreOrder = (function () {
    function StoreOrder() {
    }
    StoreOrder.prototype.setOrder = function (order) {
        this.order = order;
    };
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