import { Property } from "@/gql/graphql";
import { findPropertyById } from "@/modules/property/actions/property.actions";
import PropertyForm from "@/modules/property/components/form/form";

export default async function ViewProperty({
  params: { id },
}: {
  params: { id: string };
}) {
  const property = (await findPropertyById({ where: { id } })) as Property;

  if (!property) {
    return <h1>The property could not be found</h1>;
  }

  return <PropertyForm property={property} />;
}
