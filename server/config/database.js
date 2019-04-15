const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');
const Proejct = require('../models/Project');
const Part = require('../models/Part');

module.exports = config => {
  mongoose.connect(config.dbPath,{
      useNewUrlParser: true
    });
  const db = mongoose.connection;
  db.once('open', err => {
    if (err) throw err;
    User.seedAdminUser().then(() => {
      Proejct.seedProjects();
      Part.seedParts();
      console.log('Database ready');
    }).catch((reason) => {
      console.log('Something went wrong');
      console.log(reason);
    });
  });
  db.on('error', reason => {
    console.log(reason);
  });
};