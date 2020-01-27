import mongoose, { Schema } from 'mongoose';
import Url from './@types/Url';

const UrlSchema: Schema = new Schema({
  shortUrl: { type: String, required: true, unique: true },
  longUrl: { type: String, required: true },
  domain: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export default mongoose.model<Url>('urls', UrlSchema);
