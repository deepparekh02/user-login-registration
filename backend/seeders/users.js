const bcrypt = require("bcryptjs")

const users = [
      {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    phoneNumber: '999-999-9999',
    address: '42 Ave',
    city: 'Vancouver',
    state: 'BC',
    zipCode: '123 ABC',
    country: 'Canada',
    password: bcrypt.hashSync('admin@admin.com', 10),
  },
  {
    name: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    phoneNumber: '999-999-9999',
    address: '42 Ave',
    city: 'Seattle',
    state: 'BC',
    zipCode: '123 ABC',
    country: 'USA',
    password: bcrypt.hashSync('john@doe.com', 10),
  },
]

module.exports = users
