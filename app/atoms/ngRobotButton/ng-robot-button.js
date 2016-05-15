"use strict";
var NgRobotButton = (function () {
    function NgRobotButton(buttonName, callback, buttonClass) {
        this.buttonName = null;
        this.buttonClass = null;
        this.callback = null;
        this.buttonName = buttonName;
        this.callback = callback;
        this.buttonClass = (typeof buttonClass === "string") ? buttonClass : 'default';
    }
    NgRobotButton.prototype.runCallback = function () {
        this.callback();
    };
    return NgRobotButton;
}());
exports.NgRobotButton = NgRobotButton;
//# sourceMappingURL=ng-robot-button.js.map