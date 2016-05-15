
import {Component,OnInit} from "@angular/core";
import {OrderComponent} from "./atoms/order/order.component";
import {SwitchObject} from "./atoms/selectBox/switchObject";
import {SelectBoxComponent} from "./atoms/selectBox/selectBox.component";

@Component({
    selector: "my-app",
    directives: [OrderComponent,SelectBoxComponent],
    template: `
        <StackLayout>
            <Label text="Tap the button" class="title"></Label>
            
            <Button text="TAP" (tap)="onTap()"></Button>

    <Label [text]="message" class="message" textWrap="true"></Label>
    <ng-robot-order value="up"></ng-robot-order>
    <ng-robot-select-box [selectionlist]="ifSelectBoxList"></ng-robot-select-box>
</StackLayout>
`,
})
export class AppComponent implements OnInit{
    public counter: number = 16;
    private ifSelectBoxList:Array<SwitchObject> = [];

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }

    ngOnInit(){
        let obj = new SwitchObject("obstacle","If obstacle");
        let obj2 = new SwitchObject("notObstacle","Not obstacle");
        this.ifSelectBoxList.push(obj);
        this.ifSelectBoxList.push(obj2);
        console.log(JSON.stringify(this.ifSelectBoxList[0]));
    }
}
