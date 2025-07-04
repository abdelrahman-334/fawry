interface expirable {
    expiry: Date;
    getExpiryDate(): string;
}

export default expirable;