import { createClient, fetchExchange } from "urql";
import { transformExchange } from "./transformExchange";

export const client = createClient({
  url: "https://trygql.formidable.dev/graphql/basic-pokedex",
  exchanges: [transformExchange, fetchExchange],
});
