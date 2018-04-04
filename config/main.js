module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',

  database: 'mongodb://<dbuser>:<dbpassword>@ds012345.mlab.com:56789/moviedb',
  
  
  // Setting port for server
  port: 3000,

  // necessary in order to run tests in parallel of the main app
  test_port: 3001,
  test_db: 'mern-starter-test',
  test_env: 'test'
};
