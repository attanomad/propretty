export enum PropertyStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export enum CommercialStatus {
  AVAILABLE = "AVAILABLE",
  RENTED = "RENTED",
  SOLD = "SOLD",
  PENDING = "PENDING",
}

export enum SupportedCurrency {
  USD = "USD",
  THB = "THB",
  EUR = "EUR",
}

export const SupportedCurrenciesCount = Object.values(SupportedCurrency).length
