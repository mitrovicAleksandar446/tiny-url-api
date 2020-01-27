import { ServerResponse } from 'http';
import { Request } from '../@types/Routes';
import urls from '../../database/stores/urls';
import visits from '../../database/stores/visits';
import connect from '../../database/connect';
import Url from '../../database/stores/@types/Url';
import NewVisit from '../@types/inputs/NewVisit';

const ifVal = (url: Url | null, fn: Function): null => (url === null ? null : fn(url));

const createNewVisit = async (url: Url): Promise<void> => {
  const newVisit: NewVisit = {
    domain: url.domain,
    visitedAt: new Date(),
  };
  await visits.create(newVisit);
};

export default async (req: Request, res: ServerResponse, next: Function): Promise<null> => {
  await connect();
  const shortUrl = req.uris[0];

  return ifVal(await urls.findOne({ shortUrl }), async (url: Url): Promise<void> => {
    await createNewVisit(url);
    next();
  });
};
