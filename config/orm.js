var connection = require("./connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  //este es un select all, recuerda que el * selecciona todo
  selectAll: function(tableInput,cb) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tableInput], function(err,result) {
      if (err) throw err;
      console.log("línea 15 ORM",result);
      //aquí abajo siempre tiene que ir un callback con el resultado, de lo contrario no podrán tomarlo los otros archivos
      cb(result);
    });
  },
  
  insertOne: function(tableInput, colToSearch, colToSearch2, valToInsert,valToInsert2) {
    var queryString = "INSERT INTO ?? (??,??) VALUES [?:?]" ;
    connection.query(queryString, [tableInput,colToSearch,colToSearch2,valToInsert,valToInsert2], function(err,result) {
      if (err) throw err;
      console.log("línea 15 ORM",result);
      //aquí abajo siempre tiene que ir un callback con el resultado, de lo contrario no podrán tomarlo los otros archivos
      cb(result);
    });
  },  
    
    
    
  


};

module.exports = orm;

