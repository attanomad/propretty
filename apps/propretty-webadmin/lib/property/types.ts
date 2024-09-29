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

export const SupportedCurrenciesCount = Object.values(SupportedCurrency).length;

export enum SupportedAreaMeasurementUnit {
  SQM = "SQM",
  SQF = "SQF",
  SQW = "SQW", // Square Wa (ตารางวา)
  SQY = "SQY", // Square yard
  SQCM = "SQCM",
  Rai = "Rai",
  Ngan = "Ngan",
}

export interface AreaMeasurementUnitInfo {
  name: string;
  description: string;
  notation: string;
}

export const SupportedAreaMeasurementUnitInfo: Record<
  SupportedAreaMeasurementUnit,
  AreaMeasurementUnitInfo
> = {
  SQM: { name: "Square Meter", description: "", notation: "m²" },
  SQF: { name: "Square Feet", description: "", notation: "f²" },
  SQW: {
    name: "Square Wah",
    description: "Commonly used in Thailand",
    notation: "w²",
  },
  SQY: { name: "Square Yard", description: "", notation: "yd²" },
  SQCM: { name: "Square Centimeter", description: "", notation: "cm²" },
  Rai: {
    name: "Rai",
    description: "Commonly used in Thailand",
    notation: "Rai",
  },
  Ngan: {
    name: "Ngan",
    description: "Commonly used in Thailand",
    notation: "cm²",
  },
};

const conversionToSquareMeters: {
  [key in SupportedAreaMeasurementUnit]: number;
} = {
  [SupportedAreaMeasurementUnit.SQM]: 1, // 1 m² = 1 m²
  [SupportedAreaMeasurementUnit.SQF]: 0.092903, // 1 ft² = 0.092903 m²
  [SupportedAreaMeasurementUnit.SQW]: 4, // 1 Wa² = 4 m²
  [SupportedAreaMeasurementUnit.SQY]: 0.836127, // 1 yd² = 0.836127 m²
  [SupportedAreaMeasurementUnit.SQCM]: 0.0001, // 1 cm² = 0.0001 m²
  [SupportedAreaMeasurementUnit.Rai]: 1600, // 1 Rai = 1600 m²
  [SupportedAreaMeasurementUnit.Ngan]: 400, // 1 Ngan = 400 m²
};

export function convertAreaMeasurementUnit(
  value: number,
  from: SupportedAreaMeasurementUnit,
  to: SupportedAreaMeasurementUnit
): number {
  // Step 1: Convert the 'from' unit to square meters (m²)
  const valueInSquareMeters = value * conversionToSquareMeters[from];

  // Step 2: Convert from square meters (m²) to the 'to' unit
  const conversionFromSquareMeters = 1 / conversionToSquareMeters[to];
  const result = valueInSquareMeters * conversionFromSquareMeters;

  return result;
}
