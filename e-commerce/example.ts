import Cart from "./cart.js";
import Customer from "./customer.js";
import { cheese, scratchCard, television } from "./products.js";


const customer: Customer = new Customer(1, "Alice", "alice@example.com", 2000);

const cheese1 = new cheese(
  1, "Gouda", 10, 5, 1.5, new Date('2025-12-31'), "Semi-hard"
);

const tv1 = new television(
  2, "Smart TV", 1000, 3, 10, "Samsung", "QLED-X"
);

const card1 = new scratchCard(
  3, "Recharge Card", 5, 10, "SC-9981", 20
);

const myCart = new Cart(1);

myCart.addItem(cheese1, 2);
myCart.addItem(tv1, 1);
myCart.addItem(card1, 5);

myCart.checkout();