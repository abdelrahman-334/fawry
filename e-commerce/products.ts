import shippable from './interfaces/shippable';
import expirable from './interfaces/expirable';


abstract class product {

    constructor(public id: number, public name: string, public price: number, public quantity: number) 
    {}
    get totalPrice(): number {
        return this.price * this.quantity;
    }
    get currentStock(): number {
        return this.quantity;
    }
    public SetStock(newStock: number) {
        if (newStock < 0) {
            throw new Error("Stock cannot be negative");
        }
        this.quantity = newStock;
    }
    public Setprice(newPrice: number) {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        this.price = newPrice;
    }
    abstract getDetails(): string;
}

abstract class shippableProduct extends product implements shippable {
    constructor(id: number, 
                name:string, price: number, 
                quantity: number,
                public shipping_weight: number,
                ) {
        super(id,name,price, quantity);
    }
    getWeight(): number {
        return this.shipping_weight;
    }
     getName(): string {
        return this.name;
    }
}

class cheese  extends shippableProduct implements expirable {
    constructor(id: number, 
                name: string, 
                price: number, 
                quantity: number, 
                shipping_weight: number,
                public expiry: Date,
                public type: string) {
        super(id, name, price, quantity, shipping_weight);
    }
    getDetails(): string {
        return `Cheese: ${this.name}, Type: ${this.type}, Expiry: ${this.expiry.toDateString()}, Price: ${this.price}`;
    }
    getExpiryDate(): string {
        return this.expiry.toDateString();
    }
    isExpired(): boolean {
        return new Date() > this.expiry;
    }
}
class television extends shippableProduct{
    constructor(id: number, 
                name: string, 
                price: number, 
                quantity: number, 
                shipping_weight: number,
                public brand: string,
                public model: string) {
        super(id, name, price, quantity, shipping_weight);
    }
    getDetails(): string {
        return `Television: ${this.name}, Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`;
    }
}

class scratchCard extends product {
    constructor(id: number, 
                name: string, 
                price: number, 
                quantity: number,
                public cardNumber: string,
                public chargeAmount: number) {
        super(id, name, price, quantity);
    }
    getDetails(): string {
        return `Scratch Card: ${this.name}, Card Number: ${this.cardNumber}, Charge Amount: ${this.chargeAmount}, Price: ${this.price}`;
    }
}

 export {cheese, television, scratchCard, product};
