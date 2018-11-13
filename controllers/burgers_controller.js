var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
console.log("Corriendo Controller");
//para obtener todos los datos de la base de datos
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("linea 16 controller",hbsObject);
    //if (err) throw err;
    res.render("index", hbsObject);
  });
});


//para crear insertar un nuevo dato
router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name,req.body.devoured], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});









// Export routes for server.js to use.
module.exports = router;
