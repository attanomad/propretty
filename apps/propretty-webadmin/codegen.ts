import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3002/graphql",
  documents: ["./modules/**/*.(graphql|ts|tsx)", "./app/**/*.(graphql|ts|tsx)"],
  generates: {
    "./gql/": {
      /**
       * @see https://the-guild.dev/graphql/codegen/plugins/presets/preset-client
       */
      preset: "client",
      presetConfig: {
        persistedDocuments: true,
        fragmentMasking: false,
      },
    },
  },
};

export default config;
