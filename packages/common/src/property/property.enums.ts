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

export enum SupportedAreaMeasurementUnit {
  SQM = "SQM",
  SQF = "SQF",
  SQW = "SQW", // Square Wa (ตารางวา)
  SQY = "SQY", // Square yard
  SQCM = "SQCM",
  Rai = "Rai",
  Ngan = "Ngan",
}

export enum FurnishingType {
  FULLY_FURNISHED = "FULLY_FURNISHED",
  SEMI_FURNISHED = "SEMI_FURNISHED",
  UNFURNISHED = `UNFURNISHED`,
}
