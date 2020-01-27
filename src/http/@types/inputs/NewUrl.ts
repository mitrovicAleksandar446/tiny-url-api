import Url from '../../../database/stores/@types/Url';

export default interface NewUrl {
  shortUrl: Url['shortUrl'];
  longUrl: Url['longUrl'];
  domain: Url['domain'];
  createdAt: Url['createdAt'];
}
