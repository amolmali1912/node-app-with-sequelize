// // we are using this page to connect to the sql database and it give us back connection object so we can run sql queries
// const mysql = require('mysql2');

// // create a connection pool to create pool of connections that helps handling multiple connections.
// const pool = mysql.createPool({
//   host: 'localhost',  // server ip address or name
//   user: 'root',  // user name is 'root' by default
//   database: 'node-complete',  // database name in mysql
//   password: '@mol1234$'  // password during creating database
// });

// module.exports = pool.promise();  // exporting pool with promise so we can use promise chains(instead of nested callbacks) in application while working with this connection




// Sequelize connection setup:
const Sequelize = require('sequelize');

// instantiate Sequelize object:
// first argument is databaseName/schemaName
// second argument is user name
// third argument is password
// fourth argument is object where we can define which database we going to connect to like mysql here, and host/server ip address  
const sequelize = new Sequelize('node-complete', 'root', '@mol1234$', {
    dialect: 'mysql', 
    host: 'localhost' 
  });

  module.exports = sequelize;