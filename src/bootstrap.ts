import dotenv from 'dotenv';
import runHttpServer from './http/server';

export default (): void => {
  dotenv.config();
  runHttpServer();
};
