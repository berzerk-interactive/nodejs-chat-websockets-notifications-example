// require('dotenv').config()
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'e2e/*.e2e.js'
  ],
  directConnect: true,
  params: {
    sleep:1000,
    user: process.env.TEST_USER,
    password: process.env.PASSWORD,
    url: 'http://localhost:3000/'
  }
};
