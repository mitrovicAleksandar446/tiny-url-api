import { ServerResponse } from 'http';
import routes from './routes';
import { Request, RequestHandler, Route } from '../@types/Routes';

const resolveUri = (routeUri: string | RegExp, matchingUri: string): boolean => {
  const isRegularExpression = routeUri instanceof RegExp;
  return routeUri === matchingUri || (isRegularExpression && matchingUri.match(routeUri) !== null);
};

const matchedAction = (method: string, url: string) => {
  return (r: Route): boolean => r.method === method && resolveUri(r.url, url);
};

const resolveAction = (method: string, url: string): RequestHandler => {
  const route: Route | undefined = routes.find(matchedAction(method, url));
  if (!route) throw new Error(`Missing route ${url} for method ${method}`);
  return route.action;
};

const handleAction = (req: Request, res: ServerResponse): void => {
  const method: string = req.method ? req.method.toLowerCase() : 'get';
  const url: string = req.url || '/';

  const action: RequestHandler = resolveAction(method, url);
  action(req, res);
};

export default handleAction;
