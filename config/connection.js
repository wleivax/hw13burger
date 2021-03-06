// Set up MySQL connection
var mysql = require("mysql");
var JAWSDB_URL = "mysql://jruaf32k71olbp6y:in3vvovk614uj0kv@pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/azvxdks4f7049mux"


if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sqlpass1!",
  database: "burgers_db"
});
}

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;