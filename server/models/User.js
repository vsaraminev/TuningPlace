const mongoose = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },
  hashedPass: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  salt: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  parts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Part'
  }],
  roles: [{
    type: mongoose.Schema.Types.String, 
    default: 'User'
  }],
  avatar: {type: mongoose.Schema.Types.String, default: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'},
});

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
  }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
  try {
    let users = await User.find();
    if (users.length > 0) return;
    const salt = encryption.generateSalt();
    const hashedPass = encryption.generateHashedPassword(salt, 'admin');
    return User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      salt,
      hashedPass,
      roles: ['Admin', 'User']
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = User;
