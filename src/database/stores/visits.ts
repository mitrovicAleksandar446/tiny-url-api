import mongoose, { Schema } from 'mongoose';
import Visit from './@types/Visit';

const VisitSchema: Schema = new Schema({
  domain: { type: String, required: true },
  visitedAt: { type: Date, required: true },
});

export default mongoose.model<Visit>('visits', VisitSchema);
