import { ServerResponse } from 'http';
import { params, uris } from '../parsers/bodyParser';
import { Request } from '../@types/Routes';

export default async (req: Request, res: ServerResponse, next: Function): Promise<void> => {
  // eslint-disable-next-line immutable/no-mutation
  req.params = await params(req);
  // eslint-disable-next-line immutable/no-mutation
  req.uris = uris(req);
  next();
};
