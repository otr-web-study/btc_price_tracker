import Price from '../models/price';

export default defineEventHandler(async (event) => {
  const { from, to } = getQuery(event);
  return Price.find({ date: { $gte: from, $lte: to } }).sort({ date: 'asc' });
});
