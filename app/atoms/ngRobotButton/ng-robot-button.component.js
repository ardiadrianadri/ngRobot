"use strict";
var core_1 = require('@angular/core');
var NgRobotButtonComponent = (function () {
    function NgRobotButtonComponent() {
        this.ngRobotButton = null;
    }
    NgRobotButtonComponent.prototype.runCallback = function () {
        this.ngRobotButton.getCallback();
    };
    NgRobotButtonComponent = __decorate([
        core_1.Component({
            selector: 'ng-robot-button',
            template: 'ng-robot-button.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NgRobotButtonComponent);
    return NgRobotButtonComponent;
}());
exports.NgRobotButtonComponent = NgRobotButtonComponent;
//# sourceMappingURL=ng-robot-button.component.js.map