/* DROP DATABASE gilipollez_db2;
CREATE DATABASE gilipollez_db2;
USE gilipollez_db2;

CREATE TABLE gilipollez_table (
	id INT AUTO_INCREMENT PRIMARY KEY,
    checkbox1 BOOLEAN NOT NULL DEFAULT 0,
    checkbox2 BOOLEAN NOT NULL DEFAULT 0,
    mensaje VARCHAR (100)
); */
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    const checkbox1 = document.getElementById("checkbox1").checked;
    const checkbox2 = document.getElementById("checkbox2").checked;
    const textarea = document.getElementById("mensaje").value.trim();

    if (!checkbox1 && !checkbox2) {
      alert("Debe seleccionar al menos un checkbox.");
      event.preventDefault();
      return;
    }
  });
    
//_________________________________________________________________________________________

  

    /* if (textarea === "") {
      alert("El campo de texto no puede estar vacío.");
      event.preventDefault();
      return;
    } */