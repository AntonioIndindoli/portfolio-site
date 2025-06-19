const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
  date: Date
});

module.exports = mongoose.model('Image', imageSchema);