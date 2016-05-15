export class NgRobotButton {
	public buttonName: string = null;
	public buttonClass: string = null;
	private callback: any = null;

	public constructor(buttonName: string, callback: any, buttonClass?: string) {
		this.buttonName = buttonName;
		this.callback = callback;
		this.buttonClass = (typeof buttonClass === "string") ? buttonClass : 'default';
	}

	public runCallback(): any {
		this.callback();
	}
}