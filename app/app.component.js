"use strict";
var core_1 = require("@angular/core");
var ng_robot_button_component_1 = require("./atoms/ngRobotButton/ng-robot-button.component");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n        <StackLayout>\n            <Label text=\"Tap the button\" class=\"title\"></Label>\n            \n            <Button text=\"TAP\" (tap)=\"onTap()\"></Button>\n\n            <ng-robot-button></ng-robot-button>\n\n            <Label [text]=\"message\" class=\"message\" textWrap=\"true\"></Label>\n        </StackLayout>\n    ",
            directives: [ng_robot_button_component_1.NgRobotButtonComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map