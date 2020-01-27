import { ServerResponse } from 'http';
import { Request } from '../@types/Routes';
import connect from '../../database/connect';
import urls from '../../database/stores/urls';
import Url from '../../database/stores/@types/Url';
import { redirect, respondError } from '../responses';

const findUrl = async (shortUrl: string): Promise<Url | null> => urls.findOne({ shortUrl });

const conditionally = (options: {
  if: (props: Url | null) => boolean;
  then: (props: Url) => void;
  else: () => void;
}) => (props: Url | null): void => (options.if(props) ? options.then(props as Url) : options.else());

const urlExists = (url: Url | null): boolean => url !== null;

export default async (req: Request, res: ServerResponse): Promise<void> => {
  await connect();
  const shortUrl = req.uris[0];

  return conditionally({
    if: urlExists,
    then: url => redirect(res, url.longUrl),
    else: () => respondError(res, 'Url not found', 404),
  })(await findUrl(shortUrl));
};
