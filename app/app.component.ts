
import {Component,OnInit} from "@angular/core";
import {SwitchObject} from "./atoms/selectBox/switchObject";
import {NgRailsComponent} from "./atoms/rails/rails.component";

@Component({
    selector: "my-app",
    directives: [NgRailsComponent],
    template: `<ng-robot-rails></ng-robot-rails>`
})
export class AppComponent{}
