const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  number: Number,
});

module.exports = mongoose.model('User', UserSchema);
