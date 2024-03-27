//PARTE A

function evaluar(nota) {
    if (nota <4) {
        return "LIBRE";
    } else if (nota < 7) {
        return "REGULAR";
    } else {
        return "PROMOCIONADO";
    }
}
console.log(evaluar(5))


// PARTE B

function evaluarCondicion(nota) {

  if (nota < 1 || nota > 10) {
    return "ERROR";
  }
  else if (nota < 4) {
    return "LIBRE";
  }
  else if(nota < 7) {
    return "REGULAR";
  }
  else {
    return "PROMOCIONADO";
  }
}
  console.log (evaluarCondicion(7))

