import cartItem from './types/types.js';
import shippable from './interfaces/shippable.js';
import { product as Product}  from './products.js' ;
import { ShippingService } from './services/shippingService.js';
import Customer from './customer.js';
class Cart {
    constructor( private customerId: number) {
    }
    private items: cartItem[] = [];

    addItem(product: Product, quantity: number): void {
         if (
            typeof (product as any).isExpired === 'function' &&
            (product as any).isExpired()
        ) {
            throw new Error(`Cannot add ${product.name}: product is expired.`);
        }
        if (quantity <= 0) throw new Error("Quantity must be greater than 0");
        if (quantity > product.currentStock) {
            throw new Error(`Only ${product.currentStock} available for ${product.name}, cannot add ${quantity}. insufficient stock.`);
        }

        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity > product.currentStock) {
                throw new Error(`Cannot add ${quantity} more — only ${product.currentStock} in stock.`);
            }
            existingItem.quantity = newQuantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeItem(product: Product): void {
        this.items = this.items.filter(item => item.product.id !== product.id);
    }

    getItems(): cartItem[] {
        return this.items;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

     getSubtotal(): number {
        return this.items.reduce((sum, item) => {
            return sum + item.product.price * item.quantity;
        }, 0);
    }

    getShippingFee(): number {
        return 30;
    }
    
    getTotal(): number {
        return this.getSubtotal() + this.getShippingFee();
    }

    emptyCart(): void {
        this.items = [];
    }
   
}

export default Cart;