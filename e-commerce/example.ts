import { cheese, scratchCard, television } from "./products.js";
import Cart from "./cart.js";
import Customer from "./customer.js";
import checkoutService from "./services/checkoutService.js";

const cheddar = new cheese(
  1,
  "Cheddar",
  10,
  3,
  22.0,
  new Date("2025-12-31"),
  "Hard"
);

const Gouda = new cheese(
  1,
  "Gouda",
  10,
  3,
  1.0,
  new Date("2024-12-31"),
  "Hard"
);

const tv = new television(2, 
  "Samsung TV", 
  500,
  2,
  1000,
  "Samsung",
  "QLED"
);

const card = new scratchCard(
  3, 
  "Vodafone Card", 
  5, 
  5, 
  "SC123", 
  10
);

const john = new Customer(1, "John Doe", "john@example.com", 100);
const jane = new Customer(2, "Jane Smith", "jane@example.com", 20);
const ali = new Customer(3, "Ali Salem", "ali@example.com", 80);
const Noha = new Customer(4, "Noha Ahmed", "noha@example.com", 50);
try {
  const johnCart = new Cart(john.getCustomerId);
  johnCart.addItem(cheddar, 2);
  johnCart.addItem(tv, 1);
  johnCart.addItem(card, 2);
  checkoutService.checkout(johnCart, john);
} catch (error) {
  console.error((error as Error).message);
}

console.log('\n');

try {
  const janeCart = new Cart(jane.getCustomerId);
  janeCart.addItem(cheddar, 2);
  checkoutService.checkout(janeCart, jane);
} catch (error) {
  console.error((error as Error).message);
}

console.log('\n');

try {
  const aliCart = new Cart(ali.getCustomerId);
  checkoutService.checkout(aliCart, ali);
} catch (error) {
  console.error((error as Error).message);
}

console.log('\n');

try{
  const nohaCart = new Cart(Noha.getCustomerId);
  nohaCart.addItem(Gouda, 1);
  nohaCart.addItem(tv, 1);
  checkoutService.checkout(nohaCart, Noha);
}
catch (error) {
  console.error((error as Error).message);
}
console.log('\n');
