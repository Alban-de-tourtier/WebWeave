import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Alban:mYzuuRN2sKMKwlIx@webweave.pf5m2cw.mongodb.net/WebWeave', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;