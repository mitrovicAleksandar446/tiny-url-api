import generateTinyUrl from '../pipes/generateTinyUrl';
import { Route } from '../@types/Routes';
import visitLongUrl from '../pipes/visitLongUrl';
import getRecentlyMostVisitedDomains from '../actions/getRecentlyMostVisitedDomains';

const routes: Array<Route> = [
  {
    method: 'post',
    url: '/short-it',
    action: generateTinyUrl,
  },
  {
    method: 'get',
    url: '/recently-most-visited-domains',
    action: getRecentlyMostVisitedDomains,
  },
  {
    method: 'get',
    url: new RegExp(/[\w]+/),
    action: visitLongUrl,
  },
];

export default routes;
