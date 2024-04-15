import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://subgraph.testnet.magma.foundation/subgraphs/name/MagmaSwap',
  cache: new InMemoryCache(),
});
