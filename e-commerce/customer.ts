class Customer {
    constructor(id: number, name: string, email: string, balance: number) {
        this.name = name;
        this.email = email;
        this.balance = balance;
    }
    readonly name: string;
    readonly email: string;
    balance: number;
    cart: { [productId: number]: number } = {}; // productId: quantity
    get customerInfo(): string {
        return `Customer: ${this.name}, Email: ${this.email}}`;
    }
    get customerBalance(): number {
        return this.balance;
    }
    set customerBalance(newBalance: number) {
        if (newBalance < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.balance = newBalance;
    }
}