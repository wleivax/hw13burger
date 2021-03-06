var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

// allow content from public directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("./public"));

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start server listen
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});