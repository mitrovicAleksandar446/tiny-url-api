import { connect } from 'mongoose';

export default async (): Promise<void> => {
  const connString = process.env.MONGO_CONNECTION_STRING;
  if (!connString) throw new Error('Please provide mongo connection string');
  try {
    await connect(connString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
