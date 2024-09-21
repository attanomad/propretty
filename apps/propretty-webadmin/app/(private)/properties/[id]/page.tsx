import Image from "next/image";
import { findPropertyById } from "../actions";

export default async function ViewProperty({
  params: { id },
}: {
  params: { id: string };
}) {
  const property = await findPropertyById(id);

  if (!property) {
    return <h1>The property could not be found</h1>;
  }

  const { name, mediaList } = property;

  return (
    <>
      <h1>{name}</h1>
      {mediaList.length > 0
        ? mediaList.map((f) => {
            if (!f.mimetype.startsWith("image")) return null;

            return (
              <Image
                src={f.url}
                alt={f.id}
                width={200}
                height={200}
              />
            );
          })
        : null}
    </>
  );
}
