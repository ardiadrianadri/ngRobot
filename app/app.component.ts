
import {Component,OnInit} from "@angular/core";
import {NgRailsComponent} from "./atoms/rails/rails.component";

@Component({
    selector: "my-app",
    directives: [NgRailsComponent],
    template: `<ng-robot-rails></ng-robot-rails>`
})
export class AppComponent{}
