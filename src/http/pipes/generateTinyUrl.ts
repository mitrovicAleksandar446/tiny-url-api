import { ServerResponse } from 'http';
import { pipe } from '../middlewares/kernel';
import onlyValidUrls from '../middlewares/onlyValidUrls';
import saveTinyUrl from '../actions/saveTinyUrl';
import { Request } from '../@types/Routes';

export default (req: Request, res: ServerResponse): void =>
  pipe(req, res, [onlyValidUrls, saveTinyUrl]);
