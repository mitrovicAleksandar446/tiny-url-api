import { Document } from 'mongoose';

export default interface Url extends Document {
  shortUrl: string;
  longUrl: string;
  domain: string;
  createdAt: Date;
}
