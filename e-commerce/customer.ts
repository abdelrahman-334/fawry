class Customer {
    constructor(private id: number, private name: string, private email: string, private balance: number) {
    }
 
    cart: { [productId: number]: number } = {}; 
    get getCustomerInfo(): string {
        return `Customer: ${this.name}, Email: ${this.email}}`;
    }
    get getCustomerBalance(): number {
        return this.balance;
    }
    get getCustomerId(): number {
        return this.id;
    }
    set customerBalance(newBalance: number) {
        if (newBalance < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.balance = newBalance;
    }
}

export default Customer;