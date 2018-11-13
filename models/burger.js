// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

console.log("Corriendo Model")
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);      
    });

  },

  insertOne: function(colToSearch, colToSearch2, valToInsert,valToInsert2,cb) {
    orm.insertOne("burgers", colToSearch, colToSearch2, valToInsert,valToInsert2,  function(res) {
      cb(res);
    });
  },
  

}; //cierre var burger


// Export the database functions for the controller (catsController.js).
module.exports = burger;

