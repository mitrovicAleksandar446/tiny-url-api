import { IncomingMessage, ServerResponse } from 'http';

type RouteMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

type Middleware = (req: Request, res: ServerResponse, next: Function) => void | Promise<void>;

export type RequestHandler = ((req: Request, res: ServerResponse) => void | Promise<void>) | Middleware;

export interface Route {
  method: RouteMethod;
  url: string | RegExp;
  action: RequestHandler;
}

export interface Request extends IncomingMessage {
  params: any;
  uris: Array<string>;
}
