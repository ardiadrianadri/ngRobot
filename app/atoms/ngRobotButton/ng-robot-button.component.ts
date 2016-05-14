import { NgRobotButton } from './ng-robot-button';
import { Component } from '@angular/core';

@Component({
	selector: 'ng-robot-button',
	template: 'ng-robot-button.template.html'
})
export class NgRobotButtonComponent {
	private ngRobotButton: NgRobotButton = null;

	public runCallback() {
		this.ngRobotButton.getCallback();
	}
} 
