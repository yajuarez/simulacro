function evaluar(nota) {
    if (nota < 4) {
        return "LIBRE";
    } else if (nota < 7) {
        return "REGULAR";
    } else {
        return "PROMOCIONADO";
    }
}

console.log(evaluar(5))
