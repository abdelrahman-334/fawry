
import  Cart  from '../cart.js';
import { ShippingService } from '../services/shippingService.js';
import  Customer  from '../customer.js';
import shippable from '../interfaces/shippable.js';


export class checkoutService{
    static checkout(cart:Cart, Customer:Customer): void {
        if (cart.isEmpty()) {
            throw new Error("Cart is empty");
        }

        const subtotal = cart.getSubtotal();
        const shipping = cart.getShippingFee();
        const total = cart.getTotal();

        console.log("Checkout successful with items:");
        for (const item of cart.getItems()) {
            console.log(`- ${item.product.name} x ${item.quantity} @ $${item.product.price.toFixed(2)} each`);
        }
        
        const shippables: shippable[] = cart.getItems()
        .map((item: { product: any; }) => item.product)
        .filter((product: any) =>
          typeof (product as any).getName === 'function' &&
          typeof (product as any).getWeight === 'function'
        )
        .map((product: unknown) => product as unknown as shippable);

        if (shippables.length > 0) {
            ShippingService.shipItems(shippables);
        }
        console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
        console.log(`Shipping Fee: $${shipping.toFixed(2)}`);
        console.log(`Total Paid: $${total.toFixed(2)}`);
        for (const item of cart.getItems()) {
            const newValue = item.product.currentStock - item.quantity;
            item.product.SetStock(newValue);
        }
        cart.emptyCart(); 
    }
}

export default checkoutService;
