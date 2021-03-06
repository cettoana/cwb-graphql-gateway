import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import winston from 'winston';

import CwbAPI from './datasources/cwb';
import resolvers from './resolvers';
import typeDefs from './schema';

dotenv.config();

const port = process.env.PORT || 4000;
const playgroundEnabled = process.env.PLAYGROUND_ENABLED
  ? process.env.PLAYGROUND_ENABLED.toLowerCase() === 'true'
  : false;

const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

const server = new ApolloServer({
  dataSources: () => ({
    cwbAPI: new CwbAPI(),
  }),
  introspection: playgroundEnabled,
  playground: playgroundEnabled,
  resolvers,
  typeDefs,
});

server.listen({ port }).then(({ url }: { url: string }) => {
  logger.log('info', `🚀 Server ready at ${url}`);
});
