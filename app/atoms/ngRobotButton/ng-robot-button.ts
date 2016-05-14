export class NgRobotButton {
	public buttonName: string = null;
	private callback: any = null;

	public constructor(buttonName: string, callback: any) {
		this.buttonName = buttonName;
		this.callback = callback;
	}

	public runCallback(): any {
		this.callback();
	}
}