import path from "path";

// const schemaPath = path.resolve(path.dirname("."), "schema.gql");
// const schemaPath = path.resolve("..", "propretty-api", "src", "schema.gql");
const schemaPath = path.resolve(".", "schema.gql");

console.log("schema path: ", schemaPath);

export default {
  // module.exports = {
  client: {
    service: {
      // name: "test",
      // url: "http://localhost:3002/graphql",
      // can be a string pointing to a single file or an array of strings
      //   localSchemaFile: "./schema.gql",
      //   localSchemaFile: "../propretty-api/src/schema.gql",
      localSchemaFile: schemaPath,
    },
    // includes: ["../propretty-api/src/*"],
    includes: ["./*"],
    // includes: ["../propretty-api/src/*"],
  },
};
