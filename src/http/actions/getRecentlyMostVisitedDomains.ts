import { ServerResponse } from 'http';
import { Request } from '../@types/Routes';
import connect from '../../database/connect';
import visits from '../../database/stores/visits';
import { respond } from '../responses';
import Visit from '../../database/stores/@types/Visit';

export default async (req: Request, res: ServerResponse): Promise<void> => {
  await connect();
  const collection = await visits.aggregate<Visit>([
    { $group: { _id: '$domain', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);

  return respond(res, collection);
};
