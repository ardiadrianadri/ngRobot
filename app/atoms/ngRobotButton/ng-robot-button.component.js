"use strict";
var ng_robot_button_1 = require('./ng-robot-button');
var core_1 = require('@angular/core');
var NgRobotButtonComponent = (function () {
    function NgRobotButtonComponent() {
        this.ngRobotButton = null;
    }
    NgRobotButtonComponent.prototype.ngOnInit = function () {
        this.ngRobotButton = new ng_robot_button_1.NgRobotButton('botonPrueba1', function () {
            alert('prueba');
        }, null);
    };
    NgRobotButtonComponent.prototype.runCallback = function () {
        this.ngRobotButton.runCallback();
    };
    NgRobotButtonComponent = __decorate([
        core_1.Component({
            selector: 'ng-robot-button',
            templateUrl: 'atoms/ngRobotButton/ng-robot-button.template.html',
            styleUrls: ['atoms/ngRobotButton/ng-robot-button.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NgRobotButtonComponent);
    return NgRobotButtonComponent;
}());
exports.NgRobotButtonComponent = NgRobotButtonComponent;
//# sourceMappingURL=ng-robot-button.component.js.map