// export async function findProperties() {
//   const data = await fetch(`${process.env.PROPRETTY_API_URL}/properties`).then<
//     BaseResponse<Property[]>
//   >((res) => res.json());

//   if (data.code != 0) {
//     throw new Error(data.message);
//   }

//   return data.data || [];
// }
