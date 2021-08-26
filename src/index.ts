import { createConnection } from 'typeorm';
import DogsResolver from './components/dogs/dogs.resolver';
import server from './server';
import { buildSchema } from 'type-graphql';

async function startServer() {
    const schema = await buildSchema({
        resolvers: [DogsResolver],
        emitSchemaFile: true,
    });

    server(schema);
}

createConnection().then(() => {
    startServer();
});
