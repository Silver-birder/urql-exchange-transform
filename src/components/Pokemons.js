import { useQuery } from "urql";

const PokemonsQuery = `
  query Pokemons {
    pokemons(limit: 10) {
      id
      name
    }
  }
`;

export const Pokemons = () => {
  const [result] = useQuery({
    query: PokemonsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data.pokemons.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
