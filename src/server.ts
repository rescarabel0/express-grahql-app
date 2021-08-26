import { ApolloServer } from 'apollo-server';
import { GraphQLSchema } from 'graphql';

export default (schema: GraphQLSchema) => {
    const server = new ApolloServer({ schema });
    server
        .listen()
        .then(({ url }) => console.log(`🔥 Server started at ${url}`));
};
