"use strict";
var NgRobotButton = (function () {
    function NgRobotButton(buttonName, callback) {
        this.buttonName = null;
        this.callback = null;
        this.buttonName = buttonName;
        this.callback = callback;
    }
    NgRobotButton.prototype.runCallback = function () {
        this.callback();
    };
    return NgRobotButton;
}());
exports.NgRobotButton = NgRobotButton;
//# sourceMappingURL=ng-robot-button.js.map