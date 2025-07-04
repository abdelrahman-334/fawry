
import Shippable from '../interfaces/shippable.js';

export class ShippingService {
    static shipItems(items: Shippable[]): void {
        console.log("\nShipping the following items:");
        items.forEach(item => {
            console.log(`- ${item.getName()} (${item.getWeight()}kg)`);
        });
    }
}