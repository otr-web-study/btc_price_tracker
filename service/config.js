import dotenv from 'dotenv';

dotenv.config();

export const {
  MONGO_ADDR = 'localhost',
  MONGO_PORT = '27017',
  DB_NAME = 'btctracking',
  API_KEY = '',
  LOG_FILENAME = './logs/common.log',
} = process.env;
