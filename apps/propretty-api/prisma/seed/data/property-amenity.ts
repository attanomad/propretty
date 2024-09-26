import { PropertyAmenity } from '@prisma/client';

// prettier-ignore
const propertyAmenities: Pick<PropertyAmenity, 'name' | 'description'>[] = [
  { name: "Swimming Pool", description: "A private or shared pool for swimming and relaxation, often found in upscale properties." },
  { name: "Fitness Center", description: "A fully equipped gym available to residents for exercise and wellness." },
  { name: "Parking Garage", description: "A secure, covered space for vehicle parking, often with assigned spots." },
  { name: "Rooftop Terrace", description: "An outdoor space located on the roof, providing scenic views and relaxation areas." },
  { name: "24/7 Security", description: "A security system with personnel or surveillance to monitor the property at all times." },
  { name: "Gated Community", description: "A residential community with controlled access to enhance security and privacy." },
  { name: "Private Balcony", description: "An outdoor extension of a unit providing private space with views." },
  { name: "Pet-Friendly", description: "A property that allows residents to keep pets, often with designated areas for pet activities." },
  { name: "High-Speed Internet", description: "Access to fast and reliable internet connectivity for residents." },
  { name: "Concierge Service", description: "On-site staff available to assist residents with various services, such as booking reservations." },
  { name: "Playground", description: "A designated area for children to play, often with equipment like swings and slides." },
  { name: "Business Center", description: "A workspace equipped with computers, printers, and meeting rooms for residents." },
  { name: "Laundry Facilities", description: "On-site or in-unit washers and dryers for residents' convenience." },
  { name: "Clubhouse", description: "A shared space for socializing, hosting events, and recreational activities." },
  { name: "BBQ Area", description: "An outdoor area with barbecue grills for cooking and entertaining." },
  { name: "Garden or Green Space", description: "Landscaped areas for relaxation, walks, or gardening." },
  { name: "On-Site Maintenance", description: "Property staff available to handle repairs and maintenance issues promptly." },
  { name: "Sauna", description: "A heated room or cabin designed for relaxation and detoxification." },
  { name: "Tennis Court", description: "An outdoor or indoor court available for residents to play tennis." },
  { name: "Bicycle Storage", description: "A secure space for residents to store their bicycles." }
];

export default propertyAmenities;
