export class Order {
    value: string;
    image: string;

    constructor(value?: string, image?: string) {
		this.image = image;
		this.value = value;
    }
}