import { PropertyType } from '@prisma/client';

// prettier-ignore
const propertyTypes: Omit<PropertyType, 'id'>[] = [
  { name: "Single-Family Home", description: "A standalone residential building designed to house one family." },
  { name: "Condominium", description: "A private residential unit within a larger building or complex with shared amenities." },
  { name: "Townhouse", description: "A multi-level home that shares one or two walls with adjacent properties but has its own entrance." },
  { name: "Apartment", description: "A rental unit within a larger residential building, typically leased rather than owned." },
  { name: "Duplex", description: "A residential building divided into two separate living units, often with a shared wall." },
  { name: "Villa", description: "A luxurious standalone home, typically larger and with more amenities, often located in upscale areas." },
  { name: "Penthouse", description: "A top-floor unit of a condominium or apartment building, often offering luxurious amenities and expansive views." },
  { name: "Studio", description: "A compact living space that combines the bedroom, living area, and kitchen into a single room." },
  { name: "Loft", description: "A large, open living space, often converted from industrial or commercial buildings, characterized by high ceilings and few interior walls." },
  { name: "Cottage", description: "A small, quaint house, typically found in rural or vacation areas, offering a cozy atmosphere." }
];

export default propertyTypes;
