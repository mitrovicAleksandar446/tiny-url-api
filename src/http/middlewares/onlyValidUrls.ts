import { ServerResponse } from 'http';
import url from 'url';
import { respondError } from '../responses';
import { Request } from '../@types/Routes';

export default (req: Request, res: ServerResponse, next: Function) => {
  if (!req.params.url) return respondError(res, 'Missing URL');
  const result = url.parse(req.params.url);
  if (!result.hostname) return respondError(res, 'Url is not valid');
  return next();
};
