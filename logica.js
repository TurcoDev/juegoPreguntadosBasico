
function check() {
  let puntaje = 0;

  // const select1 = document.getElementById("cars");
  // console.log(select1.value);
  // if (select1.value === "fiat") {
  //   console.log("Acertaste la primer pregunta");
  //   puntaje++;
  // }

  if (comprobarRespuesta("cars", "fiat", "primer")) {
    puntaje++;
  }

  // const select2 = document.getElementById("city");
  // console.log(select2.value);
  // if (select2.value === "tan") {
  //   console.log("Acertaste la Segunda pregunta");
  //   puntaje++;
  // }



  if (comprobarRespuesta("city", "tan", "segunda")) {
    puntaje++;
  }

  console.log("Tu puntaje es: ", puntaje);
}



                          // "city"  "tan"      "segunda"
function comprobarRespuesta(element, respuesta, mensaje) {
  const select = document.getElementById(element);
  console.log(select.value);
  if (select.value === respuesta) {
    console.log("Acertaste la " + mensaje + " pregunta");
    return true;
  }
  return false;
}