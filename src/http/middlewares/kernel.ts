import { ServerResponse } from 'http';
import { respondError } from '../responses';
import { Request, RequestHandler } from '../@types/Routes';
import bodyParser from './bodyParser';

const prePipeline: Array<Function> = [
  bodyParser,
];

const postPipeline: Array<Function> = [
  //
];

const pipe = (
  req: Request,
  res: ServerResponse,
  cbs: Array<RequestHandler>,
): void => {
  const completePipeline = [...prePipeline, ...cbs, ...postPipeline];
  const cbsPipeline = completePipeline.reverse();

  const next = (err?: Error): void => {
    if (err) {
      setImmediate(() => respondError(res, err.message));
      return;
    }

    const cb: RequestHandler = cbsPipeline.pop() as RequestHandler;
    setImmediate(() => {
      try {
        cb(req, res, next);
      } catch (error) {
        next(error);
      }
    });
  };

  next();
};

export {
  pipe,
};
