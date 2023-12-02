import Price from '../models/price';

export default defineEventHandler(async (event) => {
  const { from, to } = getQuery(event);
  return Price.find();
});
