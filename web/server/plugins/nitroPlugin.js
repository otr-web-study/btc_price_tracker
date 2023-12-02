import mongoose from 'mongoose';

export const { MONGO_ADDR, MONGO_PORT, DB_NAME } = useRuntimeConfig();

export default defineNitroPlugin(async (nintroApp) => {
  try {
    await mongoose.connect(`mongodb://${MONGO_ADDR}:${MONGO_PORT}/${DB_NAME}`);
    console.log('mongo connected');
  } catch (err) {
    console.log(err);
    return;
  }
});
