const bcrypt = require('bcryptjs');

const User = [
  {
    name: 'admin', email: 'admin@gmail.com', password: bcrypt.hashSync('1234567', 10),
    isAdmin: true
  },
  {
    name: 'user', email: 'user@gmail.com', password: bcrypt.hashSync('1234567', 10),
    isAdmin: false
  },
  {
    name: 'mukesh', email: 'mukesh@gmail.com', password: bcrypt.hashSync('1234567', 10),
    isAdmin: false
  }
]


module.exports = User;