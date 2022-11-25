const mongoose = require('mongoose');

const url = "mongodb+srv://admin:admin@cluster0.fsdrhrt.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('connected to mongoose');
  });
module.exports = mongoose;