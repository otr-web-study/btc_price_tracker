import mongoose from 'mongoose';
import { MONGO_ADDR, MONGO_PORT, DB_NAME } from './config.js';
import Price from './models/price.js';
import { subscribe } from './api.js';

const main = async () => {
  try {
    await mongoose.connect(`mongodb://${MONGO_ADDR}:${MONGO_PORT}/${DB_NAME}`);
  } catch (err) {
    console.log(err);
    return;
  }

  subscribe((price) => {
    const date = new Date().getTime();

    Price.create({ date, price });
  });
};

main();
