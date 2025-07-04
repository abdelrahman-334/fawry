
import Shippable from '../interfaces/shippable.js';

export class ShippingService {
    static shipItems(items: Shippable[]): void {
        const totalWeight = items.reduce((sum, item) => sum + item.getWeight(), 0);
        console.log("\nShipping the following items:");
        items.forEach(item => {
            console.log(`- ${item.getName()} (${item.getWeight()}g)`);
        });
        console.log(`Total weight for shipping: ${totalWeight}g`);
    }
}