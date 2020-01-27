import { ServerResponse } from 'http';

const respondError = (res: ServerResponse, msg: string, statusCode = 400): void => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: false,
    msg,
  }));
};

const respond = (res: ServerResponse, data: any, statusCode = 200): void => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: true,
    data,
  }));
};

const redirect = (res: ServerResponse, url: string): void => {
  res.writeHead(302, { Location: url });
  res.end();
};

export {
  respond,
  respondError,
  redirect,
};
