"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumar_pares(numero) {
    var suma = 0;
    for (var i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            suma += i;
        }
    }
    return suma;
}
exports.default = sumar_pares;
