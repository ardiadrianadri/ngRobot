"use strict";
var Rails = (function () {
    function Rails() {
    }
    Rails.prototype.addOrder = function (order) {
        this.orders.push(order);
    };
    Rails.prototype.popOrder = function () {
        var order = this.orders.pop();
        order.run();
    };
    return Rails;
}());
exports.Rails = Rails;
//# sourceMappingURL=rails.js.map