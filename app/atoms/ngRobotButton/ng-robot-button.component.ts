import { NgRobotButton } from './ng-robot-button';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ng-robot-button',
	templateUrl: 'atoms/ngRobotButton/ng-robot-button.template.html',
	styleUrls: ['atoms/ngRobotButton/ng-robot-button.css']
})
export class NgRobotButtonComponent implements OnInit{
	private ngRobotButton: NgRobotButton = null;

	ngOnInit() {
		this.ngRobotButton = new NgRobotButton('botonPrueba1', function() {
			alert('prueba');
		}, null);
	}

	public runCallback() {
		this.ngRobotButton.runCallback();
	}
}