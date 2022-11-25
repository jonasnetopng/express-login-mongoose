const mongoose = require('../../db.js');
const Schema = mongoose.Schema;

const Auth = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    select: false,
  }
});

module.exports = mongoose.model('auth', Auth);