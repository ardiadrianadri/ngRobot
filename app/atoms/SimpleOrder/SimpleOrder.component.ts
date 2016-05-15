import {Component,OnInit} from "@angular/core";
import {Config} from "../config/config";

@Component({
    selector:'ng-robot-smplcomponent',
    templateUrl:'atoms/SimpleOrder/SimpleOrder.template.html',
    inputs:['imageview']
})
export class SimpleOrder implements OnInit{
    private imageview:string

    ngOnInit(){
        this.imageview = Config.imagePrefix + this.imageview + Config.imageSufix;
    }
}