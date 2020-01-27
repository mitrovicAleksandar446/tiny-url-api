import { createServer, Server } from 'http';
import handleAction from './router';

const runHttpServer = (): Server => {
  const server: Server = createServer();

  server.on('request', handleAction);

  server.listen(process.env.HTTP_PORT, () => {
    console.log(`Listening on port: ${process.env.HTTP_PORT}...`);
  });

  return server;
};

export default runHttpServer;
