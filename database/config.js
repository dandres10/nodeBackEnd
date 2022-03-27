const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
      mongoose.createConnection(process.env.MONGODB_CNN, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })
      console.log('Base de datos online');
  } catch (error) {
    if (err) throw err;
    console.log('Base de datos ONLINE');
  }
}

module.exports = {
    dbConnection
}