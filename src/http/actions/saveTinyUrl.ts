import { ServerResponse } from 'http';
import md5 from 'md5';
import { parse } from 'url';
import { Request } from '../@types/Routes';
import connect from '../../database/connect';
import urls from '../../database/stores/urls';
import { respond } from '../responses';
import Url from '../../database/stores/@types/Url';
import NewUrl from '../@types/inputs/NewUrl';

const findUrl = async (shortUrl: string): Promise<Url | null> => urls.findOne({ shortUrl });

const generatedPath = (url: Url): string => `${process.env.APP_URL}/${url.shortUrl}`;

const urlExists = (url: Url | null): boolean => url !== null;

const createNewUrlAndRespond = async (newUrl: NewUrl, res: ServerResponse): Promise<void> => {
  const url: Url = await urls.create(newUrl);
  return respond(res, generatedPath(url), 201);
};

const conditionally = (options: {
  if: (props: Url | null) => boolean;
  then: (props: Url | null) => void;
  else: () => void;
}) => (props: Url | null): void => (options.if(props) ? options.then(props) : options.else());

export default async (req: Request, res: ServerResponse): Promise<void> => {
  await connect();
  const longUrl = req.params.url;
  const shortUrl = md5(longUrl).substr(0, 7);
  const domain = parse(longUrl).hostname as string;
  const newUrl: NewUrl = {
    shortUrl,
    longUrl,
    domain,
    createdAt: new Date(),
  };

  const existingUrl = await findUrl(shortUrl);

  return conditionally({
    if: urlExists,
    then: url => respond(res, generatedPath(url as Url)),
    else: () => createNewUrlAndRespond(newUrl, res),
  })(existingUrl);
};
