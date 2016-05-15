import {Component,OnInit} from "@angular/core";
import {SwitchObject} from "./switchObject";

@Component({
	selector: "ng-robot-select-box",
  	templateUrl: "atoms/selectBox/selectBox.html",
  	inputs: ['selectionlist']
})
export class SelectBoxComponent implements OnInit{
	private selectionlist: Array<SwitchObject>;
	private checked: boolean = false;
	private selectedBox : SwitchObject;

	constructor(){		
	}

	ngOnInit(){
		this.selectedBox = this.selectionlist[0];
	}
}
