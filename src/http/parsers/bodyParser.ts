import { IncomingMessage } from 'http';

export const params = async (req: IncomingMessage): Promise<object> => {
  let data = '';
  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of req) {
    data += chunk;
  }
  return data ? JSON.parse(data) : {};
};

export const uris = (req: IncomingMessage): Array<string> => {
  const url = req.url as string;
  const uriSegments = url.split('/') as Array<string>;
  return uriSegments.filter(u => u !== '');
};
