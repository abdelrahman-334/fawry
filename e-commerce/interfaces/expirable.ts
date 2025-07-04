interface expirable {
    expiry: Date;
    getExpiryDate(): string;
    isExpired(): boolean;
}

export default expirable;