"use strict";
var NgRobotButton = (function () {
    function NgRobotButton() {
        this.callback = null;
        this.imageURL = null;
    }
    NgRobotButton.prototype._constructor = function (callback, imageURL) {
        this.callback = callback;
        this.imageURL = imageURL;
    };
    NgRobotButton.prototype.getCallback = function () {
        return this.callback;
    };
    NgRobotButton.prototype.getImageURL = function () {
        return this.imageURL;
    };
    return NgRobotButton;
}());
exports.NgRobotButton = NgRobotButton;
//# sourceMappingURL=ng-robot-button.js.map