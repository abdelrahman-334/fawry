import cartItem from './types/types';
import Product from './products';
class Cart {
    private items: cartItem[] = [];

    addItem(product: Product, quantity: number): void {
        if (quantity <= 0) throw new Error("Quantity must be greater than 0");
        if (quantity > product.currentStock) {
            throw new Error(`Only ${product.currentStock} available for ${product.name}`);
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


    checkout(): void {
        if (this.isEmpty()) {
            throw new Error("Cart is empty");
        }

        const subtotal = this.getSubtotal();
        const shipping = this.getShippingFee();
        const total = this.getTotal();

        console.log("Checkout successful with items:");
        for (const item of this.items) {
            console.log(`- ${item.product.name} x ${item.quantity}`);
        }

        console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
        console.log(`Shipping Fee: $${shipping.toFixed(2)}`);
        console.log(`Total Paid: $${total.toFixed(2)}`);

        this.items = []; 
    }
}
