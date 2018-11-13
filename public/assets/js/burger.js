// Make sure we wait to attach our handlers until the DOM is fully loaded.


$(function() {
    console.log("index js");
    $(".change-state").on("click", function(event) {
        //Aquí obtengo el valor del id clickeado
      var id = $(this).data("id");
      //Aquí obtengo el estado (devoured or not) del clickeado
      var newDevoured = $(this).data("newstate");
    
      //Esta información obtenida arriba la hago objeto para poderla mandar a la api un paso abajo
      var newDevouredState = {
        devoured: newDevoured
      };
  
      
      // Send the PUT request.
      // Aquí mandamos a la api para actualizar (PUT), el nuevo objeto creado
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed state to", newDevoured); //ConsoleLog solo al nuevo objeto actualizado
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
