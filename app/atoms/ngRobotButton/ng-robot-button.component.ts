import { NgRobotButton } from './ng-robot-button';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ng-robot-button',
	templateUrl: 'atoms/ngRobotButton/ng-robot-button.template.html'
})
export class NgRobotButtonComponent implements OnInit{
	private ngRobotButton: NgRobotButton = null;

	ngOnInit() {
		this.ngRobotButton = new NgRobotButton('botonPrueba1', function() {
			alert('prueba');
		});
	}

	public runCallback() {
		this.ngRobotButton.runCallback();
	}
}