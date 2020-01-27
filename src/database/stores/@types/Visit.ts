import { Document } from 'mongoose';

export default interface Visit extends Document {
  domain: string;
  visitedAt: Date;
}
