import { ServerResponse } from 'http';
import { pipe } from '../middlewares/kernel';
import { Request } from '../@types/Routes';
import incrementShortUrlVisit from '../middlewares/incrementShortUrlVisit';
import redirectToLongUrl from '../actions/redirectToLongUrl';

export default (req: Request, res: ServerResponse): void =>
  pipe(req, res, [incrementShortUrlVisit, redirectToLongUrl]);
