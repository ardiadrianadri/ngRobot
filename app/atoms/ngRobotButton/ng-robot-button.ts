export class NgRobotButton {
	private callback: any = null;
	private imageURL: string = null;

	public _constructor(callback: any, imageURL: string) {
		this.callback = callback;
		this.imageURL = imageURL;
	}

	public getCallback(): any {
		return this.callback;
	}

	public getImageURL(): string {
		return this.imageURL;	
	}
}