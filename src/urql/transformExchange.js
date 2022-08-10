import { pipe, map } from "wonka";

export const transformExchange = ({ forward }) => {
  return (ops$) =>
    pipe(
      ops$,
      forward,
      // Sample transform code
      map((result) => {
        const { data } = result;
        if (!data || !data.pokemons) {
          return result;
        }
        const { pokemons } = data;
        result.data.pokemons = pokemons.map((pokemon) => {
          pokemon["name"] = pokemon.name.toLowerCase();
          return pokemon;
        });
        return result;
      })
    );
};
