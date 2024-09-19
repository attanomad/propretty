import { Suspense } from "react";

interface BaseResponse<T = unknown> {
  code: number;
  message: string;
  data?: T;
  request_id: string;
}

interface Property {
  id: string;
  name: string;
  uniqueCode: string;
  type: PropertyType;
  createdAt: string;
  updatedAt: string;
}

interface PropertyType {
  id: string;
  name: string;
  description: string | null;
}

export async function findProperties() {
  const data = await fetch(`http://localhost:3002/properties`).then<
    BaseResponse<Property[]>
  >((res) => res.json());

  if (data.code != 0) {
    throw new Error(data.message);
  }

  return data.data || [];
}

async function PropertyList() {
  const properties = await findProperties();

  return (
    <ul>
      {properties.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

export default async function PropertiesPage() {
  return (
    <div>
      <h1>Properties</h1>
      <Suspense
        fallback={<p className="font-bold p-4 m-4">Loading property list...</p>}
      >
        <PropertyList />
      </Suspense>
    </div>
  );
}
