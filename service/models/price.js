import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  date: { type: Number, index: true },
  price: Number,
});

export default mongoose.model('Price', priceSchema);
